import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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
            <header className="h-screen w-screen bg-[rgb(245, 245, 220)]" ref={boxRef}>
                <div id="img-baby" className="absolute z-0 inset-0 overflow-hidden">
                    <img
                        className="absolute h-screen w-auto md:w-full md:h-auto object-cover object-center"
                        src="./src/assets/kitten.jpeg"
                        alt=""
                    />
                    <div
                        id="fade"
                        className="relative z-3 h-full bg-linear-to-t from-gray-950 to-transparent text-white"
                    ></div>
                </div>
                <div id="desc" className="absolute z-2 h-[80vh] bottom-0 w-screen flex flex-col justify-center text-white">
                    <h1 className="fade-in style-script-regular text-[64pt] text-center">Tigang Sasih</h1>
                    {!isOpen && (<>
                        <p className="fade-in text-center text-lg">
                            Kepada <span className="font-bold">{name}</span>
                        </p>
                        <button onClick={() => setIsOpen(true)}
                            className="zoom-btn bg-amber-400 duration-150 ease-in-out text-black w-48 flex justify-center p-4 self-center m-4 rounded-2xl">
                            <i class="fa-duotone fa-solid fa-envelope-open my-[0.2rem]"></i>{" "}
                            Open Invitation
                        </button>
                    </>
                    )}
                    {isOpen && (<>
                        <p className="font-bold max-w-fit text-center text-2xl flex mx-auto border-b-amber-50 border-b-3">17 Agustus 2026</p>
                        <a href="#" className=" mx-auto text-4xl mt-16 animate-bounce">
                            <i class="fa-solid fa-arrow-down"></i>
                        </a>
                    </>
                    )}

                </div>
            </header>
        </>
    );
}
