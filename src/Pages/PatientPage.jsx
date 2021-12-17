
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SetAppointment from '../Components/SetAppointment';
import MyAppointments from '../Components/MyAppointments';


export default function PatientPage() {
    const [value, onChange] = useState(new Date());
    const [openWindow, setOpenWindow] = useState(false);
    if(openWindow){
        return (
            <SetAppointment closeWindow = {setOpenWindow} date ={value}/>
        )
    }
    else{
    return (
    <div className='flex justify-around gap-10'>
        <div className='mx-10'>
            <h1 className='text-4xl mb-10 text-sky-800 text-center'>Appointment picking</h1>
            <Calendar className=''
            onChange={onChange}
            onClickDay={() =>{ setOpenWindow(true)}}
            value={value}
            />
            
            
        </div>
        <div>
            <MyAppointments/>
        </div>
    </div>
    )
    }
}
