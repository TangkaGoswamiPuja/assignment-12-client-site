import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Authfile/Auth";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const { user ,logOut } = useContext(AuthContext)
    const handleSignout =()=>{
      logOut()
      .then()
      .catch()
    }

    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/alltest'}>All Tests</NavLink></li>
    <li><NavLink to={'dashboard/userDb'}>Dashboard</NavLink></li>
    </>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <img className="w-10" src="https://i.ibb.co/3TyzFFz/echocardiography.png" alt="" />
    <a className="ml-2 font-bold text-3xl">Hello Health!</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {user ?
            <>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar my-anchor-element ">
                <div className="w-10 rounded-full">
                  <img alt="" src={user.photoURL} />
                </div></div>
              <Tooltip anchorSelect=".my-anchor-element" place="top">
                {user?.email} </Tooltip>
                <button className='btn btn-primary btn-outline' onClick={handleSignout}>Sign Out</button>
</>
            : <><Link to={'/login'}>    <a className="btn btn-outline btn-primary">LogIn</a> </Link>
             <Link to={'/register'}>    <a className="btn btn-outline btn-primary">SignUp</a> </Link></>
          }
    
  
  </div>
</div>
        </div>
    );
};

export default Navbar;