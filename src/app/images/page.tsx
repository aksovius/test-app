'use client'
import { useState,  useRef, RefObject, } from 'react';
import Image from 'next/image'
import styles from './images.module.css' 
import useInfiniteScroll from '../hooks/useInfiniteScroll';

// Function to calculate random height for images
function getRandomHeight(i: number): number {
    return 100 * ((i % 4) + 1)
}

export default function Images() {
    // State to store the number of images to display
    const [imageCount, setImageCount] = useState<number>(25);
  
    // Ref to observe when we need to load more images
    const loader: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    
    useInfiniteScroll(loader, ()=> setImageCount((prev: number) => prev + 25));
   
    return (
        <div className={styles.container} id='image-container'>
            {Array.from({ length: imageCount }, (_, i: number) => (
                <div 
                    key={i} 
                    className={styles.imageFrame} 
                    data-cy='image-frame'
                    style={{ height: `${getRandomHeight(i)}px` }}
                      >
                        <Image
                            src={`https://picsum.photos/seed/${i}/200/300`}
                            alt='Description of Image'
                            width={100}
                            height={100}
                            loading='lazy'
                        />
                </div>
            ))}
            <div ref={loader} id='loader'>Loading...</div>
        </div>
    );
}