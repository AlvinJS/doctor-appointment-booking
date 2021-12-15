import React , {useRef} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
 function Login (){

    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    let navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        login(emailRef.current.value, passwordRef.current.value);

        if (emailRef.current.value==="admin@gmail.com" && passwordRef.current.value==="123456"){
        navigate("/dashboard");
        }
        else{
            
            navigate("/patient"); 
        }
    }

     return(
        <div className='flex h-screen my-16'>
        <div className='shadow-lg border-2 border-double border-sky-300 rounded-lg  m-auto py-10 px-16'> 
           <h1 className='py-10 text-sky-400 font-semibold text-3xl text-center'>Login</h1>
           <form onSubmit={handleSubmit}>
            <input className='px-5 py-3 rounded-md border-2 border-gray-200 w-full m-5' type="email" ref={emailRef} placeholder="Email Adress"/>
            <input className='px-5 py-3 rounded-md border-2 border-gray-200 w-full m-5' type="password" ref={passwordRef} placeholder="Enter Password"/>
            <button className='py-3 px-7 m-5 rounded-lg bg-sky-500 hover:bg-sky-700 w-full font-bold text-white' type="submit">login</button>
            </form>
            <p className='text-md font-thin text-gray-700 ml-5'>Don't have an Account? <Link to='/signup' className='text-sky-400 hover:text-sky-700'> Sign up </Link> for your new account.</p>
            
        </div>
        </div> 
     )
 }
 export default Login;