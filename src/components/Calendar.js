import React, { useState, useEffect } from "react";
import axios from "axios";

const Calendar = ({reservations, handleBooking,date}) => {
  
 
  
  

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();
  
  const rows = [];
  let cells = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    cells.push(<td key={`empty-${i}`}></td>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), day);

    cells.push(
      <td key={currentDate}  onClick={handleBooking}>
        {day}
      </td>
    );

    if (cells.length === 7) {
      rows.push(<tr key={day}>{cells}</tr>);
      cells = [];
    }
  }

   

  if (cells.length > 0) {
    rows.push(<tr key="last" >{cells}</tr>);
  }
  
  useEffect(() => {
    const tdElements = document.querySelectorAll('td');
    console.log('how many times tabel renderd')
    tdElements.forEach((td) => {
      const currentDate = `${date.getFullYear()}-${date.getMonth() +1 }-${td.innerHTML}`
      reservations.map(res => res.date).includes(currentDate) ? td.classList.add('booked') : td.classList.add('notbooked');
    });
  }, [reservations,date]);
  return (
    <div className="calendar">
      <h1>{months[date.getMonth()]} {date.getFullYear()}</h1>
      
      <table>
        <thead>
          <tr>
            {weekdays.map((weekday) => (
              <th key={weekday}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
