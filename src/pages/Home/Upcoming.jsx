
import Marquee from "react-fast-marquee";

const Upcoming = () => {
    return (
        <div className="rounded-md bg-gradient-to-r from-rose-500 via-red-400 to-red-200 mb-5 p-2 font-bold">
            <Marquee speed={150}>
                Upcoming Event ...
            </Marquee>
        </div>
    );
};

export default Upcoming;