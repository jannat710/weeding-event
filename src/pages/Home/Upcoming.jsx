
import Marquee from "react-fast-marquee";


const Upcoming = () => {
    return (
        <div className=" rounded-md bg-gradient-to-r from-rose-500 via-red-400 to-red-200 mb-5 p-2 font-bold">
            <Marquee speed={150} >
                <div className="gap-16 flex">
                <p className="text-white">Upcoming :</p>
                <p>Entertainment</p>
                <p>Catering</p>
                <p>Floral Arangement</p>
                <p>Reception</p>
                <p>Venue decoration</p>
                <p>Photography</p>
                </div>
            </Marquee>
        </div>
    );
};

export default Upcoming;