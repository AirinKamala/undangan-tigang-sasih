import { useEffect, useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Kitab() {
    const containerKitab = useRef(null);

    useGSAP(() => {
        gsap.from(containerKitab.current, {
            y: 100, opacity:0, duration: 1, ease: "linear",
            scrollTrigger: { trigger: containerKitab.current, start: 'top 80%', end: 'top 50%', toggleActions: 'play none none reverse', }
        });
    }, containerKitab);


    return (
        <section className="py-20 justify-center-safe italic " ref={containerKitab}>
            <blockquote className="p-8 mx-auto size-fit paprika leading-8 border-l-4 border-[#87CEEB] shadow-2xl rounded-sm">
                <p>devān bhāvayatānena <br />
                    te devā bhāvayantu vaḥ <br />
                    parasparaḿ bhāvayantaḥ <br />
                    śreyaḥ param avāpsyātha</p>
            </blockquote>
            <p className="mx-auto text p-12 text-center paprika w-[80%]">Dengan ini (Yadnya), kami berbakti kepada Hyang Widhi
                dan dengan ini pula Hyang Widhi memelihara dan mengasihi kamu. Dengan
                saling memelihara satu sama lain, kamu akan mencapai kebaikan yang maha tinggi. <br />
                <span className="text-amber-800 text-[16pt]">(Bhagavad Gita III:11)</span>
            </p>
        </section>
    )
}

function Maps() {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31560.312847328354!2d115.06953540000002!3d-8.592238649999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23738397832e5%3A0x3825e71b720cf6f5!2sPantai%20Yeh%20Gangga!5e0!3m2!1sen!2sid!4v1768144075656!5m2!1sen!2sid"
            width="300" height="200"
            style={{ border: 0 }}
            className="mx-auto"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    )

}

function Detail() {
    const containerDetail = useRef(null);

    useGSAP(() => {
        gsap.from(containerDetail.current, {
            y: 100, opacity:0, duration: 1, ease: "linear",
            scrollTrigger: { trigger: containerDetail.current, start: 'top 80%', end: 'top 50%', toggleActions: 'play none none reverse', }
        });
    }, containerDetail);

    return (
        <section className="py-8 text-center" ref={containerDetail}>
            <h2 className="style-script-regular">Acara Kami</h2>
            <div id="container2" className="flex justify-center-safe p-8">
                <div className="w-52 h-52 shadow-2xl grid items-center m-2 bg-white rounded-2xl">
                    <i className="fa-solid fa-calendar text-[60pt] text-[#2090EB] mx-auto"></i>
                    <p className="font-bold paprika text-[16pt]">11 Februari 2026</p>
                </div>
                <div className="w-52 h-52 shadow-2xl grid items-center m-2 bg-white rounded-2xl">
                    <i className="fa-solid fa-clock text-[60pt] text-[#2090EB] mx-auto"></i>
                    <p className="font-bold paprika text-[16pt]">12:00 - Selesai </p>
                </div>
            </div>

            <div id="maps">
                <div className=" size-fit shadow-2xl grid mx-auto mt-20 p-4 bg-white rounded-2xl">
                    <h3 className=" mb-4 paprika">Location </h3>
                    <Maps />
                    <p className="paprika text-[12pt] p-4">Jl. Yeh Gangga I, Kec. Tabanan, <br /> Kabupaten Tabanan, Bali</p>
                </div>
            </div>
        </section>
    );
}

function Coundown() {
    const containerTimer = useRef(null);
    useGSAP(() => {
        gsap.from(containerTimer.current, {
            y: 100, opacity:0, duration: 1, ease: "linear",
            scrollTrigger: { trigger: containerTimer.current, start: 'top 80%', end: 'top 50%', toggleActions: 'play none none reverse', }
        });
    }, containerTimer);
    const targetTgl = new Date('Feb 11, 2026 12:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState(() => {
        const difference = targetTgl - new Date().getTime();
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes: Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)),
            seconnds: Math.floor(difference % (1000 * 60) / 1000)
        };
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetTgl - now;
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                minutes: Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)),
                seconnds: Math.floor(difference % (1000 * 60) / 1000)
            });

            if (difference < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconnds: 0 });
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [targetTgl]);

    if (timeLeft.days <= 0 && timeLeft.days <= 0 && timeLeft.minutes <= 0 && timeLeft.seconnds <= 0) {
        return (<>
            <h4 className="pt-8 mt-8 paprika text-center flex justify-evenly"> Acara Sudah Dimulai </h4>
            <h4 className="mt-8 p-8 paprika text-center flex justify-evenly">
                <span className="mx-2 text-[14pt] md:text-[20pt]" id="hours">{String(timeLeft.hours).padStart(2, '0')} <br /> Hours</span>:
                <span className="mx-2 text-[14pt] md:text-[20pt]" id="days">{String(timeLeft.days).padStart(2, '0')} <br /> Days</span>:
                <span className="mx-2 text-[14pt] md:text-[20pt]" id="minutes">{String(timeLeft.minutes).padStart(2, '0')} <br /> Minutes</span>:
                <span className="mx-2 text-[14pt] md:text-[20pt]" id="seconds"> {String(timeLeft.seconnds).padStart(2, '0')} <br /> Seconnds</span>
            </h4>
        </>
        );
    }

    return (
        <section ref={containerTimer}>
            <h4 className="pt-8 mt-8 paprika text-center flex justify-evenly"> Acara Dimulai Dalam </h4>
            <h4 className="mt-8 p-8 paprika text-center flex justify-evenly">
                <span className="mx-2 text-[14pt] md:text-[20pt]" id="days">{String(timeLeft.days).padStart(2, '0')} <br /> Days</span>:
                <span className="mx-2 text-[14pt] md:text-[20pt]" id="hours">{String(timeLeft.hours).padStart(2, '0')} <br /> Hours</span>:
                <span className="mx-2 text-[14pt] md:text-[20pt]" id="minutes">{String(timeLeft.minutes).padStart(2, '0')} <br /> Minutes</span>:
                <span className="mx-2 text-[14pt] md:text-[20pt]" id="seconds"> {String(timeLeft.seconnds).padStart(2, '0')} <br /> Seconnds</span>
            </h4>
        </section>

    )
}
export default function DetailAcara() {

    return (
        <>
            <div>
                <div className='detil'><Kitab /></div>
                <div className='detil'><Detail /></div>
                <div className='detil'><Coundown /></div>

            </div>
        </>
    )
}