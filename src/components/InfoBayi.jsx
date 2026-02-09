import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import miuphoto from './assetImage/miuphoto.webp'
import dodoPhoto from './assetImage/dodoPhoto.webp'
import gembulPhoto from './assetImage/gembulPhoto.webp'


gsap.registerPlugin(ScrollTrigger);


export default function InfoBayi() {
    const containerRef = useRef(null);
    const textIn = useRef(null);
    const textIn1 = useRef(null);


    const images = [
        gembulPhoto,
        miuphoto,
        dodoPhoto,
        gembulPhoto,
        miuphoto,
        dodoPhoto,
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            const slides = gsap.utils.toArray('.slide-img');
            const tl = gsap.timeline({ repeat: -1 });

            gsap.from(textIn.current, {
                y: 100, opacity: 0, duration: 1.5,
                scrollTrigger: {
                    trigger: textIn.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse',
                }
            });

            gsap.from(textIn1.current, {
                y: 100, opacity: 0, duration: 1.5,
                scrollTrigger: {
                    trigger: textIn1.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reverse',
                }
            });
            slides.forEach((slide) => {

                tl.to(slide, {
                    opacity: 1,
                    duration: 1,
                })
                    .to(slide, {
                        opacity: 1,
                        duration: 1,
                    });

            });

            gsap.from('#circle', { y: 200, opacity: 0, duration: 1.5 });

        }, containerRef);
        return () => ctx.revert();
    }, []);


    return (
        <>
            <section className="w-full h-auto text-center my-[20vh] paprika text-sm" id="info-bayi" ref={containerRef}>
                <div ref={textIn} id="astungkara">
                    <h1 className="in-text text-6xl parisienne font-black py-2 text-shadow-lg text-orange-800">Om Swastiastu</h1>
                    <p className="italic px-[15vw]">Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara Manusa Yadnya Tigang Sasih (3 Bulanan) anak kami.</p>
                </div>
                <div id="circle" className="size-36 sm:size-72 mx-auto my-[5vh] shadow-2xl rounded-full overflow-hidden relative">
                    {images.map((src, index) => (
                        <img src={src} key={index} alt={`Slide ${index}`} className="slide-img object-cover absolute inset-0 w-full h-full opacity-0" />
                    ))}
                </div>
                <div ref={textIn1} id="intro">
                    <h3 className="parisienne py-4 text-shadow-lg font-extrabold text-amber-800">Gembul | Miu-Miu | Dodo</h3>
                    <p >Kembar tiga dari pasangan <br /> <br />
                        <span className="style-script-regular text-2xl">Meng Abu <br /> & <br /> Meng Poleng </span>
                    </p>
                </div>
            </section>
        </>
    );
}