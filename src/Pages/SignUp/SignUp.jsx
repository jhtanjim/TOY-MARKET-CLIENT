import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const SignUp = () => {





    const navigate = useNavigate();



    const { createUser } = useContext(AuthContext)




    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value;

        const password = form.password.value
        const newUser = { name, photo, email, password }
        console.log(newUser);


        createUser(email, password)
            .then(res => {
                const user = res.user
                navigate(from, { replace: true });

                console.log(user);
            })
            .catch(error => console.log(error))


    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className=" w-1/2 mr-12">

                            <img src='' alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                            <div className="card-body">
                                <h1 className="text-3xl font-bold text-center">Login </h1>
                                <form onSubmit={handleSignUp}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" name='photo' placeholder="Photo URL" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" name='password' placeholder="confirm password" required className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">

                                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                                    </div>

                                </form>
                                <p className='my-4 text-center'>Alreade Have an Account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;