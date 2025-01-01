import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast"

const Navbar = () => {
  // 
  const {userSignOut , user} = useAuth();
  // user sign out
  const handleSignout =()=>{
    userSignOut()
    .then(result => {
      // handle the result here
      toast('log out success fully', {
        duration: 4000,
        position: 'top-center',
      
        // Styling
        style: {},
        className: '',
      
        // Custom Icon
        icon: '👏',
      
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
      
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      
        // Additional Configuration
        removeDelay: 1000,
      });
      console.log(result);
    }).catch(err=>{
        console.log(err.message);
    })
  }
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/conatct-us">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop">our shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar text-white bg-[#41414168] fixed z-20 ">
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
            className="uppercase menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bristro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="uppercase menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="p-2 bg-green-800 rounded-full relative">
        <GiShoppingCart className="text-2xl" />
        <span className="absolute -right-2 bottom-0 bg-[#ff0000] w-5 h-5 mx-auto rounded-full text-center text-sm">0</span>
      </div>
      <div className="navbar-end w-1/5 mx-auto">
       
        {user ? <Link onClick={handleSignout} to="/" className="btn">Sign Out</Link>:
         <Link to="/login" className="btn">Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;
