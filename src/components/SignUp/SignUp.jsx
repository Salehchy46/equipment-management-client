import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import axios from "axios";


const SignUp = () => {

    const [success, setSuccess] = useState('');
    const [regError, setRegError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.imgurl.value;

        const user = { email, password };
        // ;
        setSuccess('');
        setRegError('');

        if (password < 6) {
            setRegError('Your password should have at least 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError('Your password must contain at least one uppercase');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setRegError('Your password should have at least a number');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result)

                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt, image };

                axios.post('http://localhost:5000/users', user)
                .then(data => {
                    console.log(data.data);
                    
                })

                // fetch('equipment-management-server.vercel.app/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(newUser)
                // })
                // .then(res => res.json())
                // .then(data => {
                //     if(data.insertedId){
                //         console.log('User Created at db');
                //     }
                // })

                setSuccess('User Created Successfully')

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image,
                })

                if (result) {
                    Swal.fire({
                        title: "User created Successfully!",
                        icon: "success",
                    });
                }
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message)
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });

                }
            })
    }

    return (
        <div className="hero min-h-2/3">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <h1 className="text-4xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Already have an account? Please <Link to='/signin' className="font-black">Sign In</Link>.
                    </p>
                    {
                        success && <h5 className="text-green-500">{success}</h5>
                    }
                    {
                        regError && <h5 className="text-red-500">{regError}</h5>
                    }
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Name" id="" />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <label className="label">Image</label>
                                <input type="text" className="input" placeholder="Image" name="imgurl" />
                                <input type="submit" value="Sign Up" className="bg-black w-32 justify-items-center text-white rounded-xl h-10 mt-3" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;