import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import threeKittenBig from './assetImage/threeKittenBig.webp'
import threeKitten from './assetImage/threeKitten.webp'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(useGSAP);
import ratuAnom from './assetImage/ratuAnom.mp3'


function AudioPlay() {

    return (<button className="text-2xl text-white font-black no-hover fixed bg-amber-800 p-2 size-16 justify-center align-baseline rounded-full left-[2%] bottom-2 border-4 animate-[spin_5s_linear_infinite] border-gray-900 z-20">
        &#9836;
        <audio src={ratuAnom} autoPlay loop>
        </audio>

    </button>);
}

function Navbar() {
    return (
        <navbar className="justify-center grid grid-cols-5 w-full h-auto">
            <span className="m-2 col-span-2">
                <img src="src/assets/react.svg" className="w-16 p-2" alt="" />
            </span>

            <ul className=" grid col-span-3 grid-cols-3 justify-center items-center">
                <li className="text-lg w-min p-2 col-span-1 hover:bg-gray-400 hover:text-black rounded-md transition-color duration-250 ease-in-out m-2">
                    Home
                </li>
                <li className="text-lg w-min p-2 col-span-1 hover:bg-gray-400 hover:text-black rounded-md transition-color duration-250 ease-in-out m-2">
                    Menu
                </li>
                <li className="text-lg w-min p-2 col-span-1 hover:bg-gray-400 hover:text-black rounded-md transition-color duration-250 ease-in-out m-2">
                    Order
                </li>
            </ul>
        </navbar>
    );
}

function MainContent() {
    return (
        <main>
            <header className="h-[80dvh] flex flex-col mt-[15dvh]">
                <h1 className="text-[64px] text-center font-bold text-teal-300 hover:text-shadow-zero transition-all duration-500">Narnia Restaurant</h1>
                <a href="#menu"><button type="button" className="w-auto text-white font-bold bg-teal-500 rounded-md px-3 py-2 flex mx-auto mt-2 transition-all duration-200">Get Started</button></a>
            </header>
            <section id="menu">
                <h2 className="text-2xl font-bold text-center pt-20">Our menu</h2>
            </section>
        </main>
    );
}


export default function FirstPage({ nama }) {

    const name = nama;
    const [isOpen, setIsOpen] = useState(false);
    const boxRef = useRef();
    const handleScroll = () => {
        gsap.to(window, { duration: 2, scrollTo: '#info-bayi', ease: 'power2.inOut' });
    }
    useEffect(() => {
        let gsapvar = gsap.context(() => {
            gsap.from(boxRef.current, { y: 100, scale: .2, duration: 1, ease: "back.out(1.7)" });
            gsap.from('.zoom-btn', { scale: 0, duration: .5, ease: 'bounce.out' });
            gsap.from('.fade-in', { opacity: 0, y: 100, duration: .8, ease: "power1.in" });
        }, boxRef);
        return () => gsapvar.revert();
    }, []);


    return (
        <>

            {isOpen && (<AudioPlay />)}
            <header className="h-screen w-screen bg-[rgb(245, 245, 220)]" ref={boxRef}>
                <picture id="img-baby" className="absolute z-0 inset-0 overflow-hidden">
                    <source
                        media="(max-width: 600px)"
                        srcSet={threeKitten}
                    />
                    <img
                        className="absolute h-screen w-auto md:w-full md:h-auto object-cover object-center md:object-bottom"
                        src={threeKittenBig}
                        width="400"  
                        height="600" 
                        alt="thereKitten"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div
                        id="fade"
                        className="relative z-3 h-full bg-linear-to-t from-gray-950 via-70% via-transparent to-transparent brightness- text-white"
                    ></div>
                </picture>
                <div id="desc" className="absolute z-2 h-[80vh] bottom-0 w-screen flex flex-col justify-center text-white">
                    <h1 className="fade-in style-script-regular text-[64pt] text-center">Tigang Sasih</h1>
                    {!isOpen && (<>
                        <p className="fade-in text-center text-lg">
                            Kepada <span className="font-bold">{name}</span>
                        </p>
                        <button onClick={() => setIsOpen(true)}
                            className="zoom-btn bg-amber-400 duration-150 ease-in-out text-black w-48 flex justify-center p-4 self-center m-4 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" className="mr-2">
                                <path d="M64.4 175.8L256 33.9 447.6 175.8 289.5 293c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64.4 175.8zM256-32c-12.1 0-23.8 3.9-33.5 11L25.9 124.7C9.6 136.8 0 155.8 0 176.1L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5-21c-9.7-7.2-21.4-11-33.5-11z" />
                            </svg>
                            Open Invitation
                        </button>
                    </>
                    )}
                    {isOpen && (<>
                        <p className="font-bold max-w-fit text-center text-2xl flex mx-auto border-b-amber-50 border-b-3">11 Februari 2026</p>
                        <a href="#" className=" mx-auto text-4xl mt-16 animate-bounce">
                            <span onClick={handleScroll} className="text-[40pt]" > &darr; </span>
                        </a>

                    </>
                    )}

                </div>
            </header>
        </>
    );
}
