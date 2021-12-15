import React from 'react';
import { Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useAuth } from './Context/AuthContext';
import Dashboard from './Pages/Dashboard';
import PatientPage from './Pages/PatientPage';
import UserNavbar from './Components/UserNavbar';

function App() {
  
  const {currentUser} = useAuth();

  const cUser=currentUser; 

  if(cUser===null || cUser==='' || cUser===undefined){
  return (
   

    
    <div className="flex flex-col h-screen justify-between">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
      </div>
   
  );
  }

  else{
    return (
   
      <div className="flex flex-col h-screen justify-between">
      <UserNavbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/patient' element={<PatientPage/>}/>
        
      </Routes>
      <Footer/>
      </div>

      
    )
  }
}

export default App;
