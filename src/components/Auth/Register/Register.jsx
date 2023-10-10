import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";



const Register = () => {
    const { createUser}=useContext(AuthContext);
    const [registrationError,setRegistrationError]=useState("");
    const [successMessage,setSuccessMessage]=useState("");

    // setRegistrationError("");
    // setSuccessMessage("");


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)
        console.log(e.target)

        //password validation
        if(password.length < 6 || !password.match(/[A-Z]/) || !password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
            toast.error('Password must be less then 6 character and do not have capital letter and special character');
            return;
        }


        createUser(email,password)
        .then((result)=>{
            console.log(result.user)
            toast.success('Registration complete successfully');
        })
        .catch((error)=>{
            console.error(error)
            toast.error(error.message);
        })

    }
    return (
        <div className="">
            <div className="p-2 w-full md:w-1/2 lg:w-1/3 mx-auto min-h-screen">
                <h1 className="font-display text-3xl font-semibold text-center py-10">Register Now </h1>
                <form onSubmit={handleRegister} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    
                </form>
                
                <p className="text-center py-3">Already have an account please<Link to="/login" className="underline text-primary ml-5 "> Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;