import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';
import Calendar from '../components/Calendar';

function Home() {
  const [reservations, setReservations] = useState([]);
  const [date, setDate] = useState(new Date());
  const url = 'http://localhost:3002/reservations'

    //fetch all reservations
  useEffect(() => {
     console.log('check this how many times fetched')
    fetch(url)
      .then(response => response.json())
      .then(data => setReservations(data))
      .catch(error => console.log('Something went wrong , data not fetched'))
   }, [reservations.legnth])
  
  const handleBooking = (e) => {
    
    const day = `${date.getFullYear()}-${date.getMonth() + 1 }-${e.target.innerHTML}`;
    const confirm = window.confirm('You wanna book this date ' +  day)
   
    const obj = {
      name: 'hassen',
      date: day,
      status:'Ongoing'
    }
    if (confirm) {
      axios.post(url, obj)
        .then(response => setReservations([...reservations, response.data]))
        .catch(error => console.log(error, 'error'))
      e.target.className = 'booked disabled'
    
    }
  }
  
 
  return (
    <div className="App">
    
        <Calendar
        reservations={reservations}
        handleBooking={handleBooking}
        date={date}
        />
      
      
    </div>
  );
}

export default Home;
