import React ,{useRef} from 'react';
import {GetAppointments} from '../Context/AppointmentContext';
import { useAuth } from '../Context/AuthContext';

export default function SetAppointment({closeWindow,date}) {

    
    const nameRef = useRef();
    const timeRef = useRef();
   

    const {currentUser} = useAuth();
    const {appointment} = GetAppointments();
    const {addAppointment} = GetAppointments();  
    
    function handleSubmit(event){
        event.preventDefault();
        appointment.name= nameRef.current.value;
        appointment.email=currentUser?.email;
        appointment.date= date.toLocaleString();
        appointment.time= timeRef.current.value;
        addAppointment(appointment); 
        closeWindow(false);
    }

    return (
        <div className='flex justify-center bg-opacity-50 h-screen my-16 relative z-0'>

           <div className='shadow-lg border-2 border-double border-sky-300 rounded-lg  m-auto py-10 px-16'> 
           {/* <div className='flex justify-between'> */}
           <h1 className='py-10 text-sky-400 font-semibold text-3xl text-center'>set Appointment</h1>
           {/* <button className='bg-transparent text-black text-lg font-bold ' onClick={()=>closeWindow(false)}>X</button>
           </div> */}
           <form onSubmit={handleSubmit}>
            <input className='px-5 py-3 rounded-md border-2 border-gray-200 w-full m-5' type="text" ref={nameRef} placeholder="Enter your name"/>
            <input className='px-5 py-3 rounded-md border-2 border-gray-200 w-full m-5' type="time" ref={timeRef} />
            <div className='flex justify-around gap-5'>
            <button className='py-3 px-7 m-5 rounded-lg bg-sky-500 hover:bg-sky-700 w-full font-bold text-white' type="submit">set Appointment</button>
            <button className='py-3 px-7 m-5 rounded-lg bg-red-400 hover:bg-red-700 w-full font-bold text-white' onClick={()=>closeWindow(false)}>Cancel</button>
            </div>
            </form>
            
            
        </div> 

        </div>
        
    )
}
