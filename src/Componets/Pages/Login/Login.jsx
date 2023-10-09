import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
   const {signInUser}=useContext(AuthContext);
   const location=useLocation();
   const navigate=useNavigate()
    const handleLogin=e=>{
e.preventDefault();
 const email=e.target.email.value;
 const password=e.target.password.value;
 console.log(email,password);
 signInUser(email,password)
 .then(result=>{
    console.log(result.user);
    e.target.reset()
  navigate(location.state?  location.state:'/')
})
 .catch(error=>console.log(error.message))
    }
    return (
        <div>
        <div className="card md:card-side bg-base-100 ">
  <figure className="md:w-1/2 h-full"><img className="" src="https://i.ibb.co/3T7XFWR/4957136-1.jpg" alt="Movie"/></figure>
  <div className="card-body">
  <div className="hero bg-base-200 h-full">

      <form className="card-body w-full " onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  type="email" placeholder="email" className="input input-bordered " name='email' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-rose-400 text-white"><input type="submit" value="Login" /></button>
        </div>
        <div className="flex pt-5">
        <p>Do not have a account?</p>
        <button className="btn btn-outline text-rose-400"><Link to='/register'>Register</Link></button>
      </div>
      </form> 
      
</div>

  </div>
  
</div>
        </div>
    );
};

export default Login;