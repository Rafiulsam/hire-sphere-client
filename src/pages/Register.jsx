import Lottie from 'lottie-react';
import registerAnimation from '../assets/register.json'
import { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin';

const Register = () => {

    //redirect after register
    const navigate = useNavigate();

    const { createUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        // Call the createUser function from AuthContext
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                form.reset();
            })
            .catch(error => console.error(error));

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerAnimation} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold mb-4">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <p>Already have an account? <NavLink className="link" to="/signin" >Sign In</NavLink></p>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;