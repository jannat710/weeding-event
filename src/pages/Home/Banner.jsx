import pic1 from '../../assets/picture1.jpg';
import pic2 from '../../assets/picture2.jpg';
import pic3 from '../../assets/picture3.jpg';
import pic4 from '../../assets/picture4.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full justify-center items-center">
                    <img className='h-[70vh] w-full mx-auto opacity-50' src={pic1} alt="" />
                    <div className="absolute text-black">
                        <h1 className='text-5xl'>Join us in celebrating the beginning of forever.</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full justify-center items-center">
                    <img className='h-[70vh] w-full mx-auto opacity-50' src={pic2} alt="" />
                    <div className="absolute text-black">
                        <h1 className=''>Two hearts become one! Join us in celebrating weeding day!</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full justify-center items-center">
                    <img className='h-[70vh] w-full mx-auto opacity-50' src={pic3} alt="" />
                    <div className="absolute text-black">
                        <h1 className=''>We are getting married.</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full justify-center items-center">
                    <img className='h-[70vh] w-full mx-auto opacity-50' src={pic4} alt="" />
                    <div className="absolute text-black">
                        <h1 className=''>Two hearts, one love, forever united in marriage.</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;