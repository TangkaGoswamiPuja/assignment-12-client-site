import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Authfile/Auth";

const Login = () => {
    const [logErr , setLogErr] = useState('')
    const {signIn,signInGoogle} = useContext(AuthContext);

        // console.log('show', location)
     const navigate = useNavigate();
     const location = useLocation();
      const from = location.state?.from?.pathname || "/";
    
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onLogin = data => {
            // console.log(data);
            // console.log(errors);
            setLogErr('')
    
            signIn(data.email,data.password)
            .then(result=>{
                // console.log(result.user)
                toast("logged in successfully")
    navigate(from,{replace:true});
    
            })
            .catch(error=>{
                console.error(error)
                setLogErr(error.messege)
    
            });
    
     }
    // google
     const handelGoogle = () =>{ 
        signInGoogle()
    
        .then(result=>{
            // console.log(result.user)
            toast("logged in successfully")
            navigate(from,{replace:true});

    
        })
        .catch(error => {
            console.error(error)
        })
    
    }
    return (
        <div>
             <Helmet>
                <title>
                    | LOGIN
                </title>
            </Helmet>

            <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <img src="https://i.ibb.co/hW9BgzB/Animation-1715424318574.gif" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onLogin)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required  {...register('email')} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required  {...register('password')} />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-primary">Login</button>
        </div>
      </form>
{
    logErr && <p className='p-5 text-red-600'>{logErr}</p>
}
      <p className="text-center mb-5">don't have a account? <Link className='link text-purple-500' to="/register">plz register</Link></p>

      <div  className='flex items-center justify-center p-3 gap-2'>
        <p>or login with </p>
      <img onClick={handelGoogle} className='w-10' src="/google.png" alt="" />
    
      </div>
      

    </div>
  </div>
</div>     
   <ToastContainer />

        </div>
        </div>
    );
};

export default Login;