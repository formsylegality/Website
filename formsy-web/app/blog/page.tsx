import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "authorName": author->name
  }`
    return client.fetch(query)
}

export default async function BlogParams() {
    const posts = await getPosts()

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-white">Latest Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                    <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors">
                            {post.mainImage && (
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={urlForImage(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                                <div className="flex items-center justify-between text-sm text-slate-400">
                                    <span>{post.authorName}</span>
                                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
