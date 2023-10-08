import { useContext,  useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
const Register = () => {
    const {createUser}=useContext(AuthContext);
    const[registerError,setRegisterError]=useState('');
    const [registerSuccess,setRegisterSuccess]=useState('');
    const handleRsgister=e=>{
        e.preventDefault();
 const email=e.target.email.value;
 const password=e.target.password.value;
 setRegisterError('');
 setRegisterSuccess('');
 if(password.length<6){
    setRegisterError('Password should be 6 or longer');

    e.target.reset()
        const notify = () => toast(registerError);
   notify();
    return;
 }
 if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)){
    setRegisterError("Password should Contain minimum six characters, at least one letter, one number and one special character ")
    e.target.reset();
    
    return;
 }
  createUser(email,password)
  .then(result=>{
    console.log(result.user);
  
    setRegisterSuccess('User Created Successfully');
    e.target.reset();
})
  .catch(error=>{
    setRegisterError(error.message);
    console.log(error.message);
  })
    }
    return (
        <div>
        <div className="card md:card-side bg-base-100 ">
  <figure className="md:w-1/2 h-full"><img className="" src="https://i.ibb.co/3T7XFWR/4957136-1.jpg" alt="Movie"/></figure>
  <div className="card-body">
  <div className="hero bg-base-200 h-full">
      {
        registerError && <p>{registerError}</p>
      }
      {
        registerSuccess && <p>{registerSuccess}</p>
      }
      <form className="card-body w-full " onSubmit={handleRsgister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  type="text" placeholder="name" className="input input-bordered " name='name' required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PHOTO URL</span>
          </label>
          <input  type="text" placeholder="PhotoUrl" className="input input-bordered " name='photoUrl' required />
        </div>
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
          <button className="btn bg-rose-400 text-white"><input type="submit" value="Register" /></button>
        </div>
        <div className="flex pt-5">
        <p>Already have a account?</p>
        <button className="btn btn-outline text-rose-400"><Link to='/login'>Login</Link></button>
      
    
      </div>
      </form> 
     
</div>

  </div>
  
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;