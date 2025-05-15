import Category from "./Category";
import Slider from "./Slider";

const Home = () => {

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
                        <h1 className="mb-5 text-5xl font-bold">Elevate Your Game</h1>
                        <p className="mb-5 text-xl font-semibold">
                            Gear Up, Play Hard, Win Big.
                        </p>
                    </div>
                </div>
            </div>
            <Slider></Slider>
            <Category></Category>
        </div>
    );
};

export default Home;