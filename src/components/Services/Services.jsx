import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const services=useLoaderData()
    console.log(services)
    return (
        <div>
            <h1>Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service=><ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;