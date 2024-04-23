import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";

function Login() {
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        login(email, password)
            .then((user) => {
                console.log(user.user);
                e.target.reset();
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    return (
        <div>
            <Navbar />
            <div className='hero min-h-screen bg-base-200'>
                <div className='hero-content flex-col '>
                    <div className='text-center '>
                        <h1 className='text-5xl font-bold'>Login now!</h1>
                    </div>
                    <div className='card shrink-0 w-full max-w-5xl min-w-full shadow-2xl bg-base-100'>
                        <form onSubmit={handleLogin} className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Email</span>
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    className='input input-bordered'
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Password</span>
                                </label>
                                <input
                                    type='password'
                                    name='password'
                                    autoComplete='on'
                                    placeholder='Password'
                                    className='input input-bordered'
                                    required
                                />
                                <label className='label'>
                                    <a
                                        href='#'
                                        className='label-text-alt link link-hover'>
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className='form-control mt-6'>
                                <button className='btn btn-primary'>
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className='text-center mt-2 mb-4'>
                            Do not have an account?{" "}
                            <Link to='/register' className='text-blue-600'>
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
