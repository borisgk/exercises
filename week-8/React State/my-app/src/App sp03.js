import React, { useState } from 'react';

function Calendar({reservations}) {
  return (
    <div id="calendar">
      <h2>Reservations</h2>
        {reservations.map(r => <div class="reservation">{r.name} reserved for {r.day} @ {r.time}</div>)}
    </div>
  )
}

function Register({reservations}) {
  return (<div id="Register">
    <h2>Register</h2>
      {reservations.map(r => <div class="register">{r.day} @ {r.time}</div>)}
  </div>
  )
}

const App = () => {
    const [reservations, setReservations] = useState([
        { day: "Monday", time: 2000, name: "Earl" },
        { day: "Monday", time: 1845, name: "Ella" },
        { day: "Tuesday", time: 1930, name: "Linda" },
        { day: "Wednesday", time: 2015, name: "Anni" }
    ]);

    return (
        <div>
            <Calendar reservations={reservations} />
            <Register reservations={reservations} />
        </div>
    )
}

export default App;
