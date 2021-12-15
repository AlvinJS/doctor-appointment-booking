import React from 'react'
import { useAuth } from '../Context/AuthContext';
import {useNavigate} from 'react-router-dom';
export default function UserNavbar() {

    const {currentUser} = useAuth();
    const {logout} = useAuth();
    let navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        logout();
        navigate("/");
    }
    return (
        <nav className='container flex justify-between w-full px-7 py-5 bg-sky-400 text-white text-lg'>
            <h1 className='text-4xl font-semibold text-blue-900'>Booking Appointment</h1>
           <div className='flex justify-around gap-10'>
            <span className='mt-3'>{currentUser?.email}</span>
            <button className='bg-transparent text-white font-semibold p-3' onClick={handleSubmit}>Logout</button>
            </div> 
        </nav>
    )
}
