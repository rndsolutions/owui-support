import { useState, useEffect } from 'react';

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
    const displayedText = useTypewriterEffect("AI That Works for Your Enterprise", 100); // Ensure the full text is used
    return (
        <section className="bg-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {displayedText}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">ContextOps.AI empowers users to search, reason, and act with AI—combining natural language search, knowledge management, and custom tool integrations in one intuitive platform!</p>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                        Our platform is still in development, and we welcome early feedback. 🌟
                        <a href="https://demo.contextops.ai" className="inline-flex items-center justify-center px-2 py-1 text-base font-medium text-center text-white border border-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 mr-2">
                            Sign-Up
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        to try it out, and join our 
                        <a href="https://discord.gg/RNa7nds8" className="inline-flex items-center justify-center px-2 py-1 text-base font-medium text-center text-black border border-black rounded-lg bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 lg:ml-2">
                            Discord
                            <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249a18.365 18.365 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.069.069 0 00-.032.027C2.99 9.045 2.213 13.579 2.513 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.077.077 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.19 13.19 0 01-1.872-.885.077.077 0 01-.008-.13c.126-.094.252-.192.373-.291a.075.075 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 01.078.009c.121.099.247.197.373.291a.077.077 0 01-.007.13 12.64 12.64 0 01-1.873.884.076.076 0 00-.04.106c.36.698.772 1.362 1.226 1.993a.076.076 0 00.084.028 19.876 19.876 0 005.994-3.03.082.082 0 00.031-.056c.334-4.479-.444-9.012-3.742-13.661a.06.06 0 00-.032-.027zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"></path></svg>
                        </a> 
                        &nbsp;👋 to say hello and get your account approved!
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center w-full h-auto">
                    <div className="relative w-full max-w-lg lg:max-w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <img src="/public/phonesLogo.png" alt="phones logo" className="absolute top-0 left-0 w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

