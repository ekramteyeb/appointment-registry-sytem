import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ReservationsView from '../components/ReservationsView';

function ReservationsList() {
    const [reservations, setReservations] = useState([]);
    const [date, setDate] = useState(new Date());
    const url = 'http://localhost:3002/reservations'


    useEffect(() => {
     console.log('check this how many times fetched')
    fetch(url)
      .then(response => response.json())
      .then(data => setReservations(data))
      .catch(error => console.log('Something went wrong , data not fetched'))
   }, [reservations.legnth])

    const handleStatus = (id) => {
        const reservation = reservations.filter(res => res.id === id)[0]
        
        axios.put(`${url}/${id}`, {...reservation, status:'Done'} )
          .then(response => console.log(response.statusText))
          .catch(error => console.log('status update  not succesfull'))

  }

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure u wanna delete this ?')
        console.log(confirm, 'delete confirm')
        if (confirm) {
    
            axios.delete(`${url}/${id}`)
                .then(response => console.log(response.statusText))
                .catch(error => console.log('Delete not succesfull'))
            const newReservations = reservations.filter(res => res.id !== +id)
            setReservations(newReservations)
       
        }
    }
    //fetch all reservations
  
  return (
      <>
        <ReservationsView
        reservations={reservations}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      />
      </>
  )
}

export default ReservationsList