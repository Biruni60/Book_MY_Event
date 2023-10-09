import { useContext,  useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser,profileUpdate}=useContext(AuthContext);
    const[registerError,setRegisterError]=useState('');
    const [registerSuccess,setRegisterSuccess]=useState('');
    const handleRsgister=e=>{
        e.preventDefault();
 const email=e.target.email.value;
 const password=e.target.password.value;
 const name=e.target.name.value;
 const photourl=e.target.photoUrl.value;
 setRegisterError('');
 setRegisterSuccess('');
 if(password.length<6){
    setRegisterError('Password should be 6 or longer');

    e.target.reset()
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
    e.target.reset();
    setRegisterSuccess('User Created Successfully');
    profileUpdate(name,photourl)
    .then(()=>console.log("updated"))
    .catch(error=>console.log(error.message))
   

})
  .catch(error=>{
    setRegisterError(error.message);
  })
    }
    return (
        <div>
        <div className="card md:card-side bg-base-100 ">
  <figure className="md:w-1/2 h-full"><img className="" src="https://i.ibb.co/3T7XFWR/4957136-1.jpg" alt="Movie"/></figure>
  <div className="card-body">
  <div className="hero bg-base-200 h-full">
  
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
        <Link to='/login'> <button className="btn btn-outline text-rose-400">Login</button></Link>
      
    
      </div>
      {
        registerError && <p className="text-red-800">{registerError}</p>
      }
      {
        registerSuccess && <p className="text-green-800">{registerSuccess}</p>
      }
      </form> 
     
</div>

  </div>
  
</div>
        </div>
    );
};

export default Register;