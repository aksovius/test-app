'use client';
import { useState, useEffect, useRef, RefObject } from 'react';
import Image from 'next/image'
import styles from './images.module.css'  // your css file

// Function to calculate random height for images
function getRandomHeight(i: number): number {
    return 100 * ((i % 4) + 1)
}

export default function Images() {
    // State to store the number of images to display
    const [imageCount, setImageCount] = useState<number>(25);
    console.log('imageCount', imageCount)
    // Ref to observe when we need to load more images
    const loader: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    // State to track when all images have loaded
    const [loaded, setLoaded] = useState<boolean>(false);

    // Callback for when an image finishes loading
    const handleLoad = (): void => {
        setLoaded(true);
    };
    
    // UseEffect to observe when we need to load more images
    useEffect(() => {
        // Options for the intersection observer
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };

        let loaderElement: HTMLDivElement | null = loader.current; // capture current value of the ref

        // Observer to determine when we need to load more images
        const observer: IntersectionObserver = new IntersectionObserver(handleObserver, options);
        if (loaderElement) {
            observer.observe(loaderElement);
        }

        // Callback for when the observer intersection changes
        function handleObserver(entities: IntersectionObserverEntry[]): void {
            const target: IntersectionObserverEntry = entities[0];
            if (target.isIntersecting) { 
                // Increase the image count to load more images
                setImageCount((prev: number) => prev + 25)
            }
        }

        // Cleanup the observer on unmount
        return (): void => { 
            if(loaderElement) observer.unobserve(loaderElement); // use captured value in the cleanup function
        }
    }, []);

   
    return (
        <div className={styles.container} id='image-container'>
            {Array.from({ length: imageCount }, (_, i: number) => (
                <div key={i} className={styles.imageFrame} data-cy='image-frame' >
                    <Image
                        src={`https://picsum.photos/seed/${i}/200/300`}
                        alt='Description of Image'
                        width={100}
                        height={getRandomHeight(i)}
                        loading='lazy'
                    />
                </div>
            ))}
            <div ref={loader} id='loader'>Loading...</div>
        </div>
    );
}