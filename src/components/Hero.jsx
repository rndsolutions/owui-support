import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/scrollUtils'; // Adjust the import path as necessary

function useTypewriterEffect(text, speed) {
    const [displayedText, setDisplayedText] = useState(''); // Ensure it starts empty

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                const nextChar = text.charAt(index);
                console.log(`Appending character: ${nextChar} at index: ${index}`);
                setDisplayedText((prev) => {
                    const newText = prev + nextChar;
                    console.log(`Updated text: ${newText}`);
                    return newText;
                });
                index++;
            } else {
                console.log('Completed typing effect');
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return displayedText;
}

export default function Hero({ videoUrl }) {
    const displayedText = useTypewriterEffect("AI Assistant Built for Busy Legal Teams", 100); // Ensure the full text is used
    return (
        <section className="bg-white">
            <div className="grid max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {displayedText}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Review contracts, draft documents, summarize policies, and manage legal workflows — faster, smarter, and with full control.</p>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                        <button onClick={() => smoothScrollTo("contacts")} className="inline-flex items-center justify-center px-4 py-1 text-base font-medium text-center text-white border border-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 mx-2">
                            Request a Demo
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center w-full h-auto">
                    <div className="relative w-full max-w-lg lg:max-w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <img src="/public/hero-520-380.png" alt="phones logo" className="absolute top-0 left-0 w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}

