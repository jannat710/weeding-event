import { useLoaderData } from "react-router-dom";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar.jsx/Navbar";
import Banner from "./Banner";
import ServiceCard from "../../components/Services/ServiceCard";



const Home = () => {
    const services=useLoaderData()
    console.log(services)
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <h1>This is Home</h1>
            </div>
            <div className="border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service=><ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>
           
            
            <Footer></Footer>
        </div>
    );
};

export default Home;