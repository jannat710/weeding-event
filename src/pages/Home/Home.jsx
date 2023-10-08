import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar.jsx/Navbar";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                This is home
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;