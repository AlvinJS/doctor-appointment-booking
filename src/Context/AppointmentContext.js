import React, {useContext} from 'react'
const AppContext = React.createContext();



export function GetAppointments () {
    return useContext(AppContext);
}

export default function AppointmentContext({children}) {

    

    const appointment = {
        name:'',
        email:'',
        date:'',
        time: ''
    }

    const appointments = [];

    function addAppointment(appointment){
    appointments.push(appointment);
    }

    const value={
        appointment,
       appointments,
       addAppointment
    }

    return (
        <div>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </div>
    )
}
