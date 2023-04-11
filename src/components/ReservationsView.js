import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function ReservationsView({reservations,  handleStatus, handleDelete }) {
  const [status, setStatus] = useState('');
 
    
 const statusOtions = ["Ongoing","Done", "Cancelled"]
  return (
      <div className="reservationsview">
        <h2>All reservations</h2>
        <table style={{ width:'100%' }}>
            <thead>
                  <tr >
                      <th>User</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Delete</th>
                </tr>
            </thead>
              <tbody>
                  {reservations && reservations.map(res =>
                      <tr key={res.id + res.date} className="reservationstr" style={{ backgroundColor : res.id % 2 === 0 ? '#fff' : 'rgb(240, 237, 237)' }}>
                          <td>{res.name}</td>
                          <td>{res.date}</td>
                          <td>
                        <select onChange={
                          function (e) {
                            setStatus(e.target.value)
                            const button = document.getElementById(res.id)
                            button.className = 'activebtn'
                            
                          }}>
                                  <option  value={res.status}>{res.status}</option>
                                  {
                                    statusOtions.map(st => <option key={st + st.length } value={st}>{st !== res.status ? st : res.status}</option>)
                                  }
                        </select>
                        <button
                          id={res.id}
                          className='disablebtn'
                          onClick={function(e){
                            handleStatus(res.id)
                            const but = document.getElementById(res.id)
                            but.className = 'disablebtn'
                           
                          }
                          }
                          
                        >
                          apply
                        </button>
                          </td>
                          <td><button className="btndelete" style={{ background:'red' }} onClick={() => handleDelete(res.id)}>Delete</button></td>
                      </tr>
                  )
                }
                
            </tbody>
      </table>
    </div>
  )
}
