import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import Slider from "./Slider";
// import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import { Fade, Slide } from "react-awesome-reveal";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import App from "../Lottie/Lottie";
import Lottie from "../Lottie/Lottie";

const Home = () => {

    const { user } = useContext(AuthContext);

    const loadedUser = useLoaderData();
    console.log(loadedUser);

    return (
        <div className="m-4">
            {
                user ?
                    <div className="text-center flex justify-between flex-row-reverse items-center mb-5 p-4 shadow-sm">
                        <img src={loadedUser.image} className="rounded-full w-10 h-10" alt="User" />
                        <p className="my-2 font-medium">{loadedUser.email}</p>
                        <p className="my-2">Hi {loadedUser.name}</p>
                    </div>
                    :
                    <div>

                    </div>
            }
            {/* <Lottie className="justify-items-center max-w-full"></Lottie> */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://porta-stor.com/wp-content/uploads/2018/11/Seasonal-Sports-Equipment-Storage-1024x668.jpg)",
                }}
            >
                
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">

                        <Slide>
                            <h1 className="mb-5 text-5xl font-bold">Elevate Your Game</h1>
                        </Slide>
                        <Fade cascade damping={0.1}>
                            <p className="mb-5 text-xl font-semibold">
                                Gear Up, Play Hard, Win Big.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
            <Slider></Slider>
            <Category></Category>
        </div>
    );
};

export default Home;