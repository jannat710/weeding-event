import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "../../components/Services/ServiceCard";
import Upcoming from "./Upcoming";
import Blog from "../Blog/Blog";



const Home = () => {
    const services=useLoaderData()
    console.log(services)
    return (
        <div className="font-display">
           
            <Upcoming></Upcoming>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <h1>This is Home</h1>
            </div>
            <h1 className="text-5xl font-bold py-10 text-center">Event <span className="text-primary font-bold">Services</span></h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {
                    services.map(service=><ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>

            <Blog></Blog>

           
           
            
            
        </div>
    );
};

export default Home;