import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services=useLoaderData()
    console.log(services)
    return (
        <div className="py-10" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <h1 className='font-display text-5xl text-center mb-5 font-bold'>Event <span className="text-primary">Services</span></h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service=><ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;