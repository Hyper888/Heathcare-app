import React, {useState} from 'react';
import "./Profile.css";
import User from "../../assets/images/avatar.png";
import { HiUserCircle, HiPencilAlt, HiChatAlt2, HiHeart, HiStar } from "react-icons/hi";
import { BiMessageSquareEdit } from "react-icons/bi";
import { useFormik } from "formik";
import Select from "react-select";
import csc from "country-state-city";
import { TiTick } from "react-icons/ti";
import { AiOutlineFieldTime } from "react-icons/ai";
import Availability from "../Availability/Availability";
import TextField from '@mui/material/TextField';
import { FaAddressBook } from "react-icons/fa";
import { TbLicense } from "react-icons/tb";
import { MdRoomPreferences } from "react-icons/md";
import Address from "../Address/Address";
import License from "../License/License";
import { useSelector } from 'react-redux';

const ProfileData = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    

    const updateProfile = ()=>{

        let data = {
            "firstname": firstName,
    "lastname": lastName,
    "email": email,
    "phone": phone,
    "password": password
        }

        

    }


    return (
        <div className='profile-editing-section'>
        <div className='profile-editing-header'>
            <BiMessageSquareEdit className='edit-box-icon'/>
            <p className='my-profile-text'>My Profile</p>
        </div>
    
        <div className='profile-editing-card'>
            <div className="profile-fields">
                    <TextField 
                        className='hours-input' 
                        label="First Name" 
                        variant="outlined" 
                        value={firstName}
                        onChange={e=> setFirstName(e.target.value)}
                    />
    
                    <TextField 
                        className='hours-input' 
                        label="Last Name" 
                        variant="outlined" 
                        value={lastName}
                        onChange={e=> setLastName(e.target.value)}
                    />
            </div>
    
            <div className="profile-fields2">
                    <TextField 
                        className='hours-input' 
                        label="Email" 
                        variant="outlined" 
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
    
                    <TextField 
                        className='hours-input' 
                        label="Phone" 
                        variant="outlined" 
                        value={phone}
                        onChange={e=> setPhone(e.target.value)}
                    />
            </div>
    
            
            <div className="profile-fields2">
                    <TextField 
                        className='hours-input' 
                        label="Password" 
                        variant="outlined" 
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
    
                    <TextField 
                        className='hours-input' 
                        label="Confirm Password" 
                        variant="outlined" 
                        value={confirmPassword}
                        onChange={e=> setConfirmPassword(e.target.value)}
                    />
            </div>
    
            
    
            <div className="profile-save-btn-container">
                <button className="profile-save-btn">Save</button>
            </div>
    
        </div>  
    </div>
    )
}

export default function Profile() {
    const [nav, setNav] = useState('profile')
    // const user = useSelector(state=>state.Reducer.user)
  return (
    <>

    <div className='profile-container'>
        <div className='profile-sidebar-section'>
            <div className='profile-sidebar-card'>
                <div className='profile-user-details'>
                    <img src={User} alt="user profile image"/>
                    <p>John Doe</p>
                </div>

                <div>
                    <ul className='side-nav'>
                        <li onClick={() => setNav('profile')} className='side-nav-item side-nav-item-active'>
                            <div className='side-nav-link'>
                            <HiUserCircle className='pen-icon'/>
                            <span>My Profile</span>
                            </div>
                        </li>

                        <li onClick={() => setNav('profile')} className='side-nav-item side-nav-item-active'>
                            <div className='side-nav-link'>
                            <HiUserCircle className='pen-icon'/>
                            <span>Business Profile</span>
                            </div>
                        </li>

                        <li onClick={() => setNav('address')} className='side-nav-item'>
                            <div className='side-nav-link'>
                            <FaAddressBook className='pen-icon'/>
                            <span>Address</span>
                            </div>
                        </li>


                        <li onClick={() => setNav('licenses')} className='side-nav-item'>
                            <div className='side-nav-link'>
                            <TbLicense className='pen-icon'/>
                            <span>Licenses</span>
                            </div>
                        </li>


                        <li onClick={() => setNav('hours')} className='side-nav-item'>
                            <a href="" className='side-nav-link'>
                            <AiOutlineFieldTime className="pen-icon"/>
                            <span>Hours</span>
                            </a>
                        </li>


                        <li onClick={() => setNav('preferences')} className='side-nav-item'>
                            <div className='side-nav-link'>
                            <MdRoomPreferences className='pen-icon'/>
                            <span>Preferences</span>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        {/* <Availability/> */}
        {/* <License/> */}

        {nav === 'profile' && <ProfileData/>}
            

       
    </div>

    </>
  )
}
