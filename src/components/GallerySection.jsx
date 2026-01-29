import threeKitten from './assetImage/threeKitten.jpeg';
import miuphoto from './assetImage/miuphoto.jpeg';
import dodoPhoto from './assetImage/dodoPhoto.jpeg';
import gembulPhoto from './assetImage/gembulPhoto.jpeg';

function GallerySection() {
    return(
        <>
            <h2 className='paprika text-center'>Gallery</h2>
            <div className="h-auto w-full grid lg:grid-cols-4">
                <div className="mx-8 my-4 lg:min-h-64 object-cover object-center flex lg:col-span-2 overflow-hidden rounded-2xl"><img className=" hover:scale-125 transition-transform duration-700 object-center" src={threeKitten} alt="" /></div>
                <div className="mx-8 my-4 lg:min-h-64 object-cover object-center flex lg:col-span-2 overflow-hidden rounded-2xl"><img className=" hover:scale-125 transition-transform duration-700 object-center" src={miuphoto} alt="" /></div>
                <div className="mx-8 my-4 lg:min-h-64 object-cover object-center flex lg:col-span-2 overflow-hidden rounded-2xl"><img className=" hover:scale-125 transition-transform duration-700 object-center" src={gembulPhoto} alt="" /></div>
                <div className="mx-8 my-4 lg:min-h-64 object-cover object-center flex lg:col-span-2 overflow-hidden rounded-2xl"><img className=" hover:scale-125 transition-transform duration-700 object-center" src={dodoPhoto} alt="" /></div>

            </div>
        </>
    );
}

export default GallerySection;