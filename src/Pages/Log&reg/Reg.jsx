import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Authfile/Auth";

const Reg = () => {
    const [regError,setRegError]= useState('')
 const [show,setShow] = useState(false)
    const { createrUser} = useContext(AuthContext)
      const {register,handleSubmit, formState:{errors},reset}= useForm();
        const onSubmit = data =>{  
            // console.log(data);
            // console.log(errors);
            setRegError('')

            createrUser(data.email,data.password)
            .then(result=> {
                // console.log(result.user)
           toast("Registration successful !")
        })
        .catch(error=>{console.error(error)
            setRegError(error.message)
        })
        reset();  
            
        }
    return (
        <div>
            <Helmet>
                <title>
                    | REGISTER
                </title>
            </Helmet>
           <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <img src="https://i.ibb.co/XYVbZHN/Animation-1715424585942.gif" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name"  className="input input-bordered" 
          {...register("name",{
required:{value:true,
    message: "You must fill this input"
}})} />
        </div>
        <div>
            {errors.name && <p className='text-red-500 text-sm'>{errors.name.message} </p>}
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Avatar</span>
          </label>
          <input type="text" placeholder="Avatar" name="photo" className="input input-bordered" {...register("photo",{required:{value:true,
            message:"You must fill this input"
          }})}/>
         
        </div>
        <div>
            {errors.photo && <p className='text-red-500 text-sm'>{errors.photo.message} </p>}
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required  {...register('email')}/>
         
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='flex gap-3 items-center'>
            <input type= { show? "text":"password" }name='password' placeholder="password" className="input input-bordered" {...register('password',{
            required:{
                value:true,
                message:"You must fill this input"},
                minLength:{value:8,
                    message:"This inputs value must be at least 8 characters"},
                    pattern:{
                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        message: " must be use lower case and uppercae"
                    }
          })} />
        <span onClick={()=>setShow(!show)}className='text-xl'>
       {show?  <BsEyeSlashFill />:<BsEyeFill />}
        
         </span></div> 

        </div>
        <div>{errors.password && <p className='text-red-500'>{errors.password.message}</p>}</div> 
{/* confirm pass */}
<div className="form-control ">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <div className='flex gap-3 items-center'>
            <input type= { show? "text":"password" }name='password' placeholder="confirm password" className="input input-bordered" {...register('password',{
            required:{
                value:true,
                message:"You must fill this input"},
                minLength:{value:8,
                    message:"This inputs value must be at least 8 characters"},
                    pattern:{
                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        message: " must be use lower case and uppercae"
                    }
          })} />
        <span onClick={()=>setShow(!show)}className='text-xl'>
       {show?  <BsEyeSlashFill />:<BsEyeFill />}
        
         </span></div> 

        </div>
        <div>{errors.password && <p className='text-red-500'>{errors.password.message}</p>}</div> 


        <div className="form-control mt-6">
          <button className="btn btn-outline btn-primary">Register</button>
        </div>
      </form>
      {
        regError && <p className='p-5 text-red-600'>{regError}</p>
    }
      <p className="text-center mb-5">Already have a account? <Link className='link text-purple-500' to="/login">plz login</Link></p>

    </div>
  </div>
</div>
<ToastContainer />
           </div>

        </div>
    );
};

export default Reg;