
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu && mobileMenuCloseButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
        mobileMenuCloseButton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }

    // Coming Soon Modal (for elements that might be on pages using this script)
    const comingSoonLinks = document.querySelectorAll('.coming-soon-link');
    const comingSoonModal = document.getElementById('coming-soon-modal');
    const comingSoonCloseButton = document.getElementById('coming-soon-close-button');

    if (comingSoonModal && comingSoonCloseButton) {
        comingSoonLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                comingSoonModal.classList.remove('hidden');
            });
        });
        comingSoonCloseButton.addEventListener('click', () => {
            comingSoonModal.classList.add('hidden');
        });
        comingSoonModal.addEventListener('click', (e) => {
            if (e.target === comingSoonModal) {
                comingSoonModal.classList.add('hidden');
            }
        });
    }

    // Drag and Drop for Service Cards
    const handleImageDrop = (dropZone: HTMLElement) => {
        const imgElement = dropZone.querySelector('img');
        const overlay = dropZone.querySelector('.drop-overlay');
        const storageKey = dropZone.dataset.storageKey;

        if (!imgElement || !storageKey) return;

        const compressImage = (file: File, quality = 0.85): Promise<string> => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target!.result as string;
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const MAX_WIDTH = 1200;
                        const MAX_HEIGHT = 1200;
                        let width = img.width;
                        let height = img.height;

                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                            }
                        }
                        
                        canvas.width = width;
                        canvas.height = height;
                        
                        const ctx = canvas.getContext('2d');
                        if (!ctx) {
                           return reject(new Error('Failed to get canvas context'));
                        }
                        ctx.drawImage(img, 0, 0, width, height);
                        
                        const outputFormat = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
                        const dataUrl = canvas.toDataURL(outputFormat, quality);
                        resolve(dataUrl);
                    };
                    img.onerror = (error) => reject(error);
                };
                reader.onerror = (error) => reject(error);
            });
        };

        const loadFromStorage = () => {
            try {
                const savedImage = localStorage.getItem(storageKey);
                if (savedImage) {
                    imgElement.src = savedImage;
                }
            } catch (error) {
                console.error("Could not load image from localStorage:", error);
            }
        };

        dropZone.addEventListener('dragenter', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.add('drag-over');
            overlay?.classList.remove('hidden');
            overlay?.classList.add('flex');
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('drag-over');
            overlay?.classList.add('hidden');
            overlay?.classList.remove('flex');
        });

        dropZone.addEventListener('drop', async (e: DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('drag-over');
            overlay?.classList.add('hidden');
            overlay?.classList.remove('flex');

            if (e.dataTransfer && e.dataTransfer.files[0]) {
                const file = e.dataTransfer.files[0];
                if (file && file.type.startsWith('image/')) {
                    try {
                        const base64String = await compressImage(file);
                        imgElement.src = base64String;
                        localStorage.setItem(storageKey, base64String);
                    } catch (error) {
                        console.error('Could not save image to local storage:', error);
                        alert('Could not save the image. The file may be too large or browser storage is full. Please try a smaller image.');
                    }
                } else {
                     alert('Please drop an image file.');
                }
            }
        });

        loadFromStorage();
    };
    
    document.querySelectorAll('.service-drop-zone').forEach(zone => {
        handleImageDrop(zone as HTMLElement);
    });
    
    // Tab switching logic
    const tabsContainer = document.getElementById('service-tabs-container');
    if (tabsContainer) {
        const tabs = Array.from(tabsContainer.querySelectorAll('.service-tab'));
        const tabContents = document.querySelectorAll('.tab-content');

        const activateTab = (tabToActivate: Element | null) => {
            if (!tabToActivate) return;
            const tabName = (tabToActivate as HTMLElement).dataset.tab;
            if (!tabName) return;

            // Update tab styles
            tabs.forEach(t => {
                t.classList.remove('bg-blue-600', 'text-white');
                t.classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-100', 'border', 'border-gray-200');
            });
            tabToActivate.classList.add('bg-blue-600', 'text-white');
            tabToActivate.classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-100', 'border', 'border-gray-200');
            
            // Update panel visibility
            tabContents.forEach(content => {
                if (content.id === `tab-content-${tabName}`) {
                    content.classList.remove('hidden');
                    content.classList.add('grid');
                } else {
                    content.classList.add('hidden');
                    content.classList.remove('grid');
                }
            });
        };

        // Add click listeners to all tabs
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                activateTab(tab);
            });
        });
        
        // Set initial active tab on load
        const preActive = tabsContainer.querySelector('.service-tab.bg-blue-600') || tabsContainer.querySelector('.service-tab[data-tab="IPR"]') || tabs[0];
        if (preActive) {
            activateTab(preActive);
        }
    }

    // Cloud Animation for Formsy Advantage section
    const formsyAdvantageSection = document.getElementById('formsy-advantage');
    const advantageTextContainer = document.getElementById('advantage-text-container');
    if (formsyAdvantageSection && advantageTextContainer) {
        const cloudLayers = [
            document.getElementById('cloud-layer-1'),
            document.getElementById('cloud-layer-2'),
            document.getElementById('cloud-layer-3')
        ];
        const playButton = document.getElementById('play-button-container');
        const titleEl = advantageTextContainer.querySelector('h3');
        const desc1El = advantageTextContainer.querySelector('.advantage-desc-1');
        const desc2El = advantageTextContainer.querySelector('.advantage-desc-2');
        
        const advantages = [
            {
                title: 'Seamless Onboarding',
                desc1: 'Start with a simple idea. Our intuitive platform guides you through every step, making complex processes feel easy.',
                desc2: 'No jargon, no confusion—just clear, straightforward guidance.',
                transforms: [
                    'translateX(-10px) translateY(5px) rotate(-3deg) scale(1.05)',
                    'translateX(-5px) translateY(-3px) rotate(2deg) scale(1.02)',
                    'translateX(5px) translateY(3px) rotate(-1deg) scale(1.03)'
                ]
            },
            {
                title: 'Expert-Led Process',
                desc1: 'Our team of legal and financial experts ensures your registration and compliance are handled with precision.',
                desc2: 'We manage the details, so you can focus on your vision.',
                transforms: [
                    'translateX(10px) translateY(-5px) rotate(3deg) scale(1.06)',
                    'translateX(3px) translateY(5px) rotate(-2deg) scale(1.01)',
                    'translateX(-4px) translateY(-2px) rotate(1deg) scale(1.04)'
                ]
            },
            {
                title: 'Tech-Driven Efficiency',
                desc1: 'Leverage our powerful technology for faster filings, real-time updates, and secure document management.',
                desc2: 'Experience a smarter, more efficient way to manage your business compliance.',
                transforms: [
                    'translateX(0) translateY(0) rotate(0) scale(1)',
                    'translateX(0) translateY(0) rotate(0) scale(1)',
                    'translateX(0) translateY(0) rotate(0) scale(1)'
                ]
            }
        ];
        
        let currentAdvantage = 0;
        let advantageInterval: number | null = null;

        const showAdvantage = (index: number) => {
            advantageTextContainer.classList.remove('is-visible');
            
            setTimeout(() => {
                const content = advantages[index];
                if (titleEl && desc1El && desc2El) {
                    titleEl.textContent = content.title;
                    desc1El.textContent = content.desc1;
                    desc2El.textContent = content.desc2;
                }
                
                cloudLayers.forEach((layer, i) => {
                    if (layer) {
                        layer.style.transform = content.transforms[i];
                    }
                });

                if (playButton) {
                    (playButton as HTMLElement).style.display = 'none';
                }
                
                advantageTextContainer.classList.add('is-visible');
            }, 300);
        };
        
        const stopAndReset = () => {
             if(advantageInterval) {
                clearInterval(advantageInterval);
                advantageInterval = null;
            }
            advantageTextContainer.classList.remove('is-visible');
            setTimeout(() => {
                if (titleEl) titleEl.textContent = '';
                if (desc1El) desc1El.textContent = '';
                if (desc2El) desc2El.textContent = '';
                if (playButton) {
                    (playButton as HTMLElement).style.display = 'flex';
                }
                cloudLayers.forEach((layer) => {
                    if (layer) {
                        layer.style.transform = 'translateX(0) translateY(0) rotate(0) scale(1)';
                    }
                });
            }, 300);
        }

        const startLoop = () => {
            if (advantageInterval) return; // Prevent multiple intervals
            if (advantageInterval) clearInterval(advantageInterval);
            currentAdvantage = 0;
            showAdvantage(currentAdvantage);
            advantageInterval = window.setInterval(() => {
                currentAdvantage = (currentAdvantage + 1) % advantages.length;
                showAdvantage(currentAdvantage);
            }, 3500);
        }
        
        formsyAdvantageSection.addEventListener('mouseenter', startLoop);
        formsyAdvantageSection.addEventListener('mouseleave', stopAndReset);

        // Mobile Scroll Interaction using IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    startLoop();
                } else {
                    stopAndReset();
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% visible

        observer.observe(formsyAdvantageSection);
    }
});
