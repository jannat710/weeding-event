import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Login = () => {
    const {signInWithGoogle}=useContext(AuthContext);
    console.log(signInWithGoogle)
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

    }

    const handleGoogleLogIn =()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="">
            <div className="p-2 w-full md:w-1/2 lg:w-1/3 mx-auto min-h-screen">
                <h1 className="font-display text-3xl font-semibold text-center py-10">Login Now </h1>
                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            
                        </form>
                        <p className="text-center py-3">Do not have any account please<Link to="/register" className="underline text-primary ml-5 "> Register</Link> </p>
                        <div className="form-control mt-6">
                        <button onClick={handleGoogleLogIn} className="btn btn-primary">Login With Google</button>
                    </div>
            </div>
        </div>
    );
};

export default Login;