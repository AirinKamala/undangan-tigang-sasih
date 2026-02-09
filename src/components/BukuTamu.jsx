import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

function trauncatedText(teks) {
    if (teks.length <= 150) {
        return teks;
    }
    return teks.substring(0, 150) + '...';
}
function BukuTamu() {
    const bukuTamu = useRef(null);
    useGSAP(() => {
        gsap.from(bukuTamu.current, {
            y: 100, opacity: 0, duration: 1, ease: 'linear',
            scrollTrigger: {
                trigger: bukuTamu.current, start: 'top 80%', end: 'top 50%', toggleActions: 'play none none reverse',
            }
        });
    }, bukuTamu);

    const [listKomen, setListKomen] = useState(()=> {
        let savedComment = localStorage.getItem('bukuTamu');
        return savedComment ? JSON.parse(savedComment) : [
            { nama: 'Bu kadek', pesan: 'Rahayu', kehadiran: 'Hadir' }, 
            { nama: 'Yan Dodi', pesan: 'Siap hadir', kehadiran: 'Hadir' },
            { nama: 'Pak mang ', pesan: 'Ampura ten nyidng hadir', kehadiran: 'Tidak Hadir' }
        ]
    });

    useEffect(()=> {
        localStorage.setItem('bukuTamu', JSON.stringify(listKomen));
    }, [listKomen]);
    const addKomen = (e) => {
        e.preventDefault();
        const nama = e.target.nama.value;
        const pesan = e.target.pesan.value;
        const kehadiran = e.target.kehadiran.value;


        setListKomen([{ nama, pesan, kehadiran },...listKomen]);
        e.target.reset();
    }

    return (
        <article ref={bukuTamu}>
            <form id="formBuku" onSubmit={addKomen} className="h-auto w-full bg-[#87CEEB] shadow-2xl text-lg mt-[20vw] rounded-md p-8 grid md:px-36">
                <h2 className="style-script-regular">Buku tamu</h2>
                <p className="paprika">Make a wish for those babies</p>
                <input type="text" className="h-12" name="nama" id="nama" placeholder="Nama" required />

                <textarea name='pesan' className="max-h-48 min-h-24" id="pesan" placeholder="Tulis sesuatu"></textarea>

                <select className="h-12" name="kehadiran" id="kehadiran" required >
                    <option value='' >Pilih Kehadiran</option>
                    <option value='Hadir' >Hadir</option>
                    <option value="Tidak Hadir" >Tidak Hadir</option>
                </select>
                <button type="submit" className="w-auto mx-auto bg-lime-600 text-white font-bold rounded-md px-4 transition-all duration-200 mt-8">Send</button>
            </form>

            <div id="comment" className="w-full md:px-24 py-8">
                <ul>
                    {listKomen.map((komen, index) => (
                        <li key={index} className="bg-[#EDF2F4] paprika rounded-lg not-first:mt-4 w-full py-4 px-8 min-h-8 shadow-lg">
                            <p className="text-sm flex justify-between">
                                <span>{komen.nama}</span><span>{komen.kehadiran}</span>
                            </p>
                            <hr className="border-teal-600/30 border-2" />
                            <p className="text-lg pl-4 ">{
                                trauncatedText(komen.pesan)
                            }</p>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default BukuTamu;