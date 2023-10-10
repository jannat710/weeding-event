import { useParams } from "react-router-dom";


const Servicedetail = () => {
    const { details } = useParams();
    return (
        <div className="py-10">
            <div className="hero h-[70vh] bg-base-200">
                <div className="hero-content text-center">
                    <div className="w-full mx-auto" data-aos="zoom-out-right">
                        <h1 className="text-2xl font-medium">Details</h1>
                        <h1 className="text-2xl font-extralight">{details}</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicedetail;