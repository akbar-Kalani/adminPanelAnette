
"use client"



import React, { useState } from 'react';
import Modal from './src/app/modal/page';

import './style.css'
const Calendar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  


    const year = 2023;
    const month = 8;

    const cal = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const startingDay = cal.getDay();

    const days = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < startingDay) || day > daysInMonth) {
                week.push(null);
            } else {
                week.push(day);
                day++;
            }
        }
        days.push(week);
    }
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day) => {
        setSelectedDay(day);
        alert('Hello')
        
    };
    return (
        <div className='border w-full flex justify-center flex-wrap mx-auto'>
            <h1 className='w-full text-center'>{`${year} ${new Date(year, month - 1).toLocaleString('default', { month: 'long' })}`}</h1>
            <ul className="calendar   w-[50%] mx-auto flex  flex-wrap ">

                {days.map((week, index) => (
                    <React.Fragment key={index}>
                        {week.map((day, index) => (
                            <li key={index}
                                className={day ? "day" : "empty"}
                                onClick={() => handleDayClick(day)}
                            > 
                            {day ? day : ''}
                            </li>
                        ))}
                    </React.Fragment>
                ))}
                 
            </ul>
        
        </div>
    );
};

export default Calendar;
