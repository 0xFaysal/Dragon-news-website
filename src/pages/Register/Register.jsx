import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";

function Register() {
    const { createUser, profileUpdate, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(() => {
                profileUpdate(name, photoUrl)
                    .then(() => {
                        console.log("Profile updated");
                    })
                    .catch((error) => {
                        console.error(error.message);
                    });
                e.target.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
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
                        <h1 className='text-5xl font-bold'>Register now!</h1>
                    </div>
                    <div className='card shrink-0 w-full max-w-5xl min-w-full shadow-2xl bg-base-100'>
                        <form onSubmit={handleRegister} className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Name</span>
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Name'
                                    className='input input-bordered'
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>
                                        Photo Url
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    name='photoUrl'
                                    placeholder='Photo Url'
                                    className='input input-bordered'
                                    required
                                />
                            </div>
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
                                    placeholder='Password'
                                    className='input input-bordered'
                                    required
                                />
                            </div>
                            <div className='form-control mt-6'>
                                <button className='btn btn-primary'>
                                    Register
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

export default Register;
