import React, {useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Hiring.css';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import ProfessionalCard from '../ProfessionalCard/ProfessionalCard';

export default function Hiring() {
        const [filter, setFilter] = useState('');

  return (
    <>
    
    <div className='hiring-heading'>
        <h1>Healthcare Professionals Ready to Hire.</h1>
        </div>
    <div className='hiring-container'>
        <div className='filter-sidebar'>
            <Sidebar/> 
        </div>


        <div className='hiring-card-section'>
            <div className='card-section-header'>
                <div className='sort-by'>
                    <p>Sort by:</p>
                    <select 
                    className='sort-options'
                    value={filter}
                    onChange={e=> setFilter(e.target.value)}
                    >
                        <option>Lorem Ipsum</option>
                        <option>Lorem Ipsum</option>
                        <option>Lorem Ipsum</option>
                    </select>
                </div>

                <div className='pagi-icons'>
                    <IoIosArrowDropleft style={{marginRight:".8rem"}}/>
                    <IoIosArrowDropright/>
                </div>
            </div>

            <div>
                <ProfessionalCard/>
            </div>
         
        </div>
    </div>

    </>
  )
}
