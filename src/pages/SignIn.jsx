import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import sigInAnimation from '../assets/signIn.json'
import { useNavigate } from 'react-router-dom';



const SignIn = () => {
    //redirect after sign in
    const navigate = useNavigate();

    const { signIn } = use(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        //call the signIn function from AuthContext
        signIn(email, password)
            .then(result => {
                const signedInUser = result.user;
                console.log(signedInUser);
                form.reset();
                // alert('Sign In Successful');
                navigate('/');
            })
            .catch(error => console.error(error));
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left w-1/4">
                    <Lottie animationData={sigInAnimation} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold mb-4">Sign In now!</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;