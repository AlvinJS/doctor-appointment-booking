import React from 'react';
import {Link} from 'react-router-dom';
function Navbar () {
    return(
        <nav className='container flex justify-between w-full px-7 py-5 bg-sky-400 text-white text-lg text-semibold'>
            <h1 className='text-4xl font-semibold text-blue-900'>Booking Appointment</h1>
            <Link className='mt-3' to="/">Home</Link>
           <div className='flex justify-around gap-10 mt-2'>
            <Link to="login">Login</Link>
            <Link to="signup">Sign up</Link>
            </div> 
        </nav>

    )

}

export default Navbar;