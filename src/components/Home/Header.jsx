import { useContext, useEffect } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const Header = () => {

    const userName = useLoaderData();
    console.log(userName);
    

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Sign out"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        console.log('User logged out successfully');
                        Swal.fire({
                            title: "Signed Out!",
                            text: "You have successfully signed out.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    };

    const navLinks = <>
        {
            user ? <>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/shop'>Shop</NavLink></li>
                <li><NavLink to='/addproducts'>Add Products</NavLink></li> {/*Private*/}
                <li><NavLink to='/mylist'>My List</NavLink></li> {/*Private*/}
                <li><NavLink onClick={handleLogOut}>Log Out</NavLink></li>
            </>
                :
                <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/shop'>Shop</NavLink></li>
                    <li><NavLink to='/signup'>Register</NavLink></li>
                    <li><NavLink to='/signin'>Login</NavLink></li>
                </>
        }
    </>
    return (
        <div className="m-4">
            <div className="navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <img
                        src="https://i.ibb.co/kg71kTzS/download.webp"
                        alt="LOGO"
                        className="w-14 mx-4 rounded-full"
                    />
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mx-4">{navLinks}</ul>
                </div>

                <div className="navbar-end mr-6">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <span>{userName?.name || "Anonymous"}</span>
                            <img src={userName?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxEkhyTAMbKemqMiMJqqUQ2DkMss6isC4ng&s"} className="w-10 rounded-full" alt="User Avatar" />
                        </div>
                    ) : (
                        <span>Login first</span>
                    )}
                </div>
            </div>
        </div>
    );

}

export default Header;