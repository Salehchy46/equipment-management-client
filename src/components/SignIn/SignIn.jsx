import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";

const SignIn = () => {

    const { user, loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const emailRef = useRef(null);

    const handleSiginIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                console.log(result.user);

                //update last time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch('equipment-management-server.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                e.target.value.reset();
                Swal.fire({
                    title: "Logged in Successfully!",
                    icon: "success",
                    draggable: true
                });
                navigate('/');
            })
            .catch(error => {
                console.error(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
    }

    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);

                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { lastSignInTime };

                fetch('equipment-management-server.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                // fetch('equipment-management-server.vercel.app/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(user.email)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         if (data.insertedId) {
                //             console.log('User Created at db');
                //         }
                //     })

                Swal.fire({
                    title: "Logged in Successfully!",
                    icon: "success",
                    draggable: true
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);

                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { lastSignInTime };

                fetch('equipment-management-server.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                Swal.fire({
                    title: "Logged in Successfully!",
                    icon: "success",
                    draggable: true
                });
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
    }

    const handleForgetPass = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        if (!email) {
            console.log('send email', emailRef.current.value);
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please enter a valid password');
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    title: "Check your Email!",
                    draggable: false
                });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            })
    }


    return (
        <div className="hero min-h-2/3">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Don't You Have An Account? Please <Link to='/signup' className="font-black">Sign Up</Link>.
                    </p>
                    <div className="flex">
                        <button onClick={handleGithubSignIn}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvuQu4rS_7Youa1oHiC33-RS2G_cCONV0GQ&s" className="w-20 h-10 rounded-xl mr-2" alt="Github" /></button>
                        <button onClick={handleGoogleSign} className=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmgPPxnjhICjWXiOQZbkDtCRayEOQwjT9Pw&s" className="w-20 h-10 rounded-xl" alt="Google" /></button>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSiginIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" ref={emailRef} className="input" name="email" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" name="password" placeholder="Password" />
                                <div><a className="link link-hover" onClick={handleForgetPass}>Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;