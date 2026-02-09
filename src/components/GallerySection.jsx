import threeKitten from './assetImage/threeKitten.jpeg';
import miuphoto from './assetImage/miuphoto.jpeg';
import dodoPhoto from './assetImage/dodoPhoto.jpeg';
import gembulPhoto from './assetImage/gembulPhoto.jpeg';

function GallerySection() {
    return (
        <>
            <h2 className="style-script-regular text-center">Gallery</h2>
            <div className="h-auto w-full flex overflow-x-scroll scroll-smooth">
                <div className="h-72 min-w-48 m-4 object-cover object-center flex overflow-hidden rounded-2xl"><img className="h-72 min-w-48 hover:scale-125 transition-transform duration-700 object-center" src={miuphoto} alt="" /></div>
                <div className="h-72 min-w-48 m-4 object-cover object-center flex overflow-hidden rounded-2xl"><img className="h-72 min-w-48 hover:scale-125 transition-transform duration-700 object-center" src={threeKitten} alt="" /></div>
                <div className="h-72 min-w-48 m-4 object-cover object-center flex overflow-hidden rounded-2xl"><img className="h-72 min-w-48 hover:scale-125 transition-transform duration-700 object-center" src={gembulPhoto} alt="" /></div>
                <div className="h-72 min-w-48 m-4 object-cover object-center flex overflow-hidden rounded-2xl"><img className="h-72 min-w-48 hover:scale-125 transition-transform duration-700 object-center" src={dodoPhoto} alt="" /></div>

            </div>
        </>
    );
}

export default GallerySection; 