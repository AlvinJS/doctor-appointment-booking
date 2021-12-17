import React from 'react'
import {GetAppointments} from '../Context/AppointmentContext';




export default function Dashboard() {
    const {appointments} = GetAppointments();
    

    
    
    return (
        <div className='mx-auto flex justify-center h-screen'>
            <h1 className='text-gray-500 text-3xl font-semibold text-center mb-5'>List Of  Appointments</h1>
            <ul>

            {appointments.map( (appointment) => ( 
            <li className='flex justify-around gap-10 my-5 mx-3 p-3'>
                <div>{appointment.name}</div>
                <div>{appointment.email}</div>
                <div>{appointment.date}</div>
                <div>{appointment.time}</div>
                
                
            </li> 
            ))}

        </ul>
        </div>
    )
}
