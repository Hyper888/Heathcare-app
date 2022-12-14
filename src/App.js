import React from 'react';
import logo from './logo.svg';
import HomeLayout from './Components/HomeLayout';
import { HashRouter, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import HiringLayout from './Components/HiringLayout';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import ProfileDetails from './Components/ProfileDetails/ProfileDetails';
import Availability from './Components/Availability/Availability';
import Chat from './Components/Chat/Chat';
import './Responsive.css'
import Address from './Components/Address/Address';

function App() {
  return (
    <>
            <Header/>
            {/* <ForgotPassword/> */}
                      {/* <ProfileDetails/> */}
                      {/* <Availability/> */}
                      {/* <Chat/> */}
                      {/* <SignUp/> */}
                      {/* <Profile/>   */}
     <HashRouter>
  
        <Route exact path="/" component={LogIn} />
        {/* <Route path="/" element={<HiringLayout/>} /> */}
        <Route path="/Profile" component={Profile} />     
        <Route path="/register" component={SignUp} />       

      
      </HashRouter>
      <Footer/>
    </>
  );
}

export default App;
