import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const components = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="relative w-full h-96 my-8">
                    <Image
                        src={urlForImage(value).fit('max').auto('format').url()}
                        alt={value.alt || ' '}
                        fill
                        className="object-contain"
                    />
                </div>
            )
        },
    },
}

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    body,
    publishedAt,
    "author": author->{name, image, bio}
  }`
    return client.fetch(query, { slug })
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <p className="text-slate-400">
                    Published on {new Date(post.publishedAt).toLocaleDateString()}
                    {post.author && ` by ${post.author.name}`}
                </p>
            </div>

            {post.mainImage && (
                <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden">
                    <Image
                        src={urlForImage(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="prose prose-invert prose-lg mx-auto">
                <PortableText value={post.body} components={components} />
            </div>

            {post.author && (
                <div className="mt-16 pt-8 border-t border-slate-700 flex items-center gap-4">
                    {post.author.image && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image
                                src={urlForImage(post.author.image).url()}
                                alt={post.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <div>
                        <h3 className="text-xl font-bold text-white">{post.author.name}</h3>
                        {post.author.bio && <div className="text-slate-400"><PortableText value={post.author.bio} /></div>}
                    </div>
                </div>
            )}
        </article>
    )
}
