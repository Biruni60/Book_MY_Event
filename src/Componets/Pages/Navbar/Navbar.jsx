import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const navLink=<>
         <li className="text-xl font-semibold "><NavLink  to='/'>Home</NavLink></li>
         <li className="text-xl font-semibold"><NavLink to='/review'>Review</NavLink></li>
         <li className="text-xl font-semibold"><NavLink to='/event'>Book a Event</NavLink></li>
       
    </>
    const {user,logOut}=useContext(AuthContext);
    const handleSignOut=()=>{
      logOut()
      .then()
      .catch()
    }
    return (
        <div className="nav">
          <div className="navbar bg-base-100 shadow-md md: p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <img className="w-10 rounded-lg mx-2" src="https://i.ibb.co/ZTWCwFy/8041979-1.jpg"  />
    <h2 className= "text-xl md:text-3xl text-rose-400">BOOKMYEVENT</h2>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="flex space-x-7 ">
    {navLink}
    </ul>
  </div>
  <div className="navbar-end">
  
  {
  user?
 <div><p>{user.email}</p>  <button onClick={handleSignOut} className="btn btn-outline bg-red-400 text-white text-xl">Sign Out</button></div>
  : 
   <button className="btn btn-outline bg-red-400 text-white text-xl"><Link to='/login'>Login</Link></button>
  }
   
  </div>
</div>  
        </div>
    );
};

export default Navbar;