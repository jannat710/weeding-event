import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const links = <>
        <li className='text-white'><NavLink to="/">Home</NavLink></li>
        <li className='text-white'><NavLink to="/services">Services</NavLink></li>
        <li className='text-white'><NavLink to="/blog">Blog</NavLink></li>
        <li className='text-white'><NavLink to="/login">Login</NavLink></li>
        <li className='text-white'><NavLink to="/photography">Photography</NavLink></li>
        <li className='text-white'><NavLink to="/rsvp">RSVP</NavLink></li>
    </>
    return (
        <div className="navbar bg-primary mb-5 shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className='h-10 w-20' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://i.ibb.co/Pj4yRZG/photography.jpg" />
                    </div>
                </label>
                <Link>
                    <button className='btn'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;