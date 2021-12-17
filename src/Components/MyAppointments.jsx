import React from 'react'
import {GetAppointments} from '../Context/AppointmentContext';
import { useAuth } from '../Context/AuthContext';



export default function MyAppointments() {
    const {appointments} = GetAppointments();
    const {currentUser} = useAuth();

    function bookedAppointments (currentuser=currentUser?.email) {
        return appointments.filter(appointment => appointment.email === currentuser)
    }

    const myAppointments = bookedAppointments();
    
    return (
        <div className='mx-auto'>
            <h1 className='text-gray-500 text-3xl font-semibold text-center mb-5'>My Appointments</h1>
            <ul>
                {console.log(appointments)}

           {myAppointments.map((appointment) => ( 
            <li className='flex justify-between my-5 mx-3 p-3'>
                <div>
                <div>{appointment.date}</div>
                <div>{appointment.time}</div>
                </div>
                <div><span className='text-red-500 font-bold text-2xl'>X</span></div>
                
            </li> 
            ))}
        
        </ul>
        </div>
    )
}
