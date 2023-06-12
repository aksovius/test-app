'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from './images.module.css'  // your css file

function getRandomHeight(i:number):number {
    return 100 * ((i % 4) + 1)
}

export default function Images() {
    const [imageCount, setImageCount] = useState(25);
   
    const loader = useRef(null); // Create a reference to an element below the images
    const [loaded, setLoaded] = useState(false);
   
    const handleLoad = () => {
        setLoaded(true);
    };
    
    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current);
        }

        function handleObserver(entities:IntersectionObserverEntry[]) {
            const target = entities[0];
            if (target.isIntersecting) { 
                setImageCount((prev) => prev + 25)
            }
        }

        return () => { // Cleanup the observer on unmount
            if(loader.current) observer.unobserve(loader.current);
        }
    }, []);

   
    return (
        <div className={styles.container}>
            {Array.from({ length: imageCount }, (_, i) => (
                <div key={i} className={styles.imageFrame} >
                    <Image
                        src={`https://picsum.photos/seed/${i}/200/300`}
                        alt='Description of Image'
                        width={100}
                        height={getRandomHeight(i)}
                        loading='lazy'
                    />
                </div>
            ))}
            <div ref={loader}>Loading...</div>
        </div>
    );
}