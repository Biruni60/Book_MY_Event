import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const navLink=<>
         <li className="text-xl font-semibold "><NavLink  to='/'>Home</NavLink></li>
         <li className="text-xl font-semibold"><NavLink to='/review'>Reviews</NavLink></li>
         <li className="text-xl font-semibold"><NavLink to='/event'>Booked  Event</NavLink></li>
       
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
    <h2 className= "text-lg md:text-3xl text-rose-400">BOOKMYEVENT</h2>
  </div>
  
  <div className="navbar-center hidden lg:flex">
    <ul className="flex space-x-7 ">
    {navLink}
    </ul>
  </div>
  <div className="navbar-end">
  
  {
  user?
 <div><button onClick={handleSignOut} className="btn btn-outline bg-red-400 text-white  text-base md:text-xl">log Out</button></div>
  : 
   <button className="btn btn-outline bg-red-400 text-white text-base md:text-xl"><Link to='/login'>Login</Link></button>
  }
   <div>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn " onClick={()=>document.getElementById('my_modal_1').showModal()}>user</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
   {
    user? <div> <p>Email:{user.email}</p>
    <p>Name:{user.displayName}</p>
    <img className=" w-12 h-12 rounded-lg " src={user.photoURL}  /></div>:"No User"
   }
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
   </div>
  </div>
</div>  
        </div>
    );
};

export default Navbar;