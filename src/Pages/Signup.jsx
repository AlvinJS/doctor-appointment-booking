import React ,{useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


 function Signup (){

    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup} =useAuth();
    let navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value);
        navigate("/login");
    }

     return(
        <div className='flex h-screen my-16'>
         <div className='shadow-lg border-2 border-double border-sky-300 rounded-lg  m-auto py-5 px-16'> 
            <h1 className='my-5 text-sky-600 font-semibold text-3xl text-center'>Create your Account!</h1>
            <form onSubmit={handleSubmit}>
            <div className='flex justify-around gap-10'>
             <input className='px-5 py-3 rounded-md border-2 border-gray-200 w-full m-5' type="text" placeholder="First Name"/>
             <input className='px-5 py-3 rounded-md border-2 border-grey-200 w-full m-5' type="text" placeholder="Last Name"/>
             </div> 
             <input className='px-5 py-3 rounded-md border-2 border-gray-200 w-full m-5' type="number" placeholder="Phone Number"/>
             <input className='px-5 py-3 rounded-md border-2 border-gray-200 w-full m-5' type="email" ref={emailRef} placeholder="Email Adress" required/>
             <input className='px-5 py-3 rounded-md border-2 border-gray-200 w-full m-5' type="password" ref={passwordRef} placeholder="Enter Password" required/>
             <button className='py-3 px-7 m-5 rounded-lg bg-sky-500 hover:bg-sky-700 w-full font-bold text-white' type="submit">Sign Up</button>
             </form>
             <p className='text-md font-thin text-gray-700 ml-5'>Already have an Account? <Link to='/login' className='text-sky-400 hover:text-sky-700'> Login </Link> into your account.</p>
         </div>
         </div>  
     )
 }
 export default Signup;