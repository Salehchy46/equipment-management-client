import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import Slider from "./Slider";
// import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {

    // const user = useLoaderData();
    // console.log(user);

    return (
        <div className="m-4">
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
                        {/* <div className="flex items-center">
                            <img src={user.image} alt="" className="w-10 h-10 rounded-full" />
                            <p>Hi {user.name}</p>
                        </div> */}
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