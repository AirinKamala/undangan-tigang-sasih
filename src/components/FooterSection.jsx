import reactLogo from './assetImage/react.svg'

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-center py-4 flex justify-center flex-col text-white w-screen min-h-48 ">
            <div className="px-12 md:px-16 ">
                <picture className="flex mx-auto  justify-center p-4">
                    <img src={reactLogo} alt="React logo" className="w-auto h-[20vh]" />
                </picture>

                <p className="text-lg paprika mt-4 ">Disclaimer: Ini hanya untuk guyonan belaka, nama, tokoh, dan peristiwa di dalamnya hanyalah fiktif.</p>
                <div id="social" className="flex justify-center-safe my-8">
                    <a href="https://www.instagram.com/kamalaairin/" target="_blank"><i className="text-[24pt] fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/6287796730344" target="_blank"><i className="text-[24pt] fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            <hr />
            <p>&copy; 2026 Airin Kamala</p>
        </footer>
    );
}