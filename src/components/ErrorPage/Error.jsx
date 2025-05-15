import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="self-center m-auto">
      <div>
        <img className="w-1/4 mx-auto py-4 my-4 origin-center" src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png" alt="Error" />
      </div>
      <div className="text-center">
        <h2 className="text-4xl py-8">Oops!</h2>
        <Link to="/" className="p-4 bg-purple-400 rounded-md">Go Back To Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;