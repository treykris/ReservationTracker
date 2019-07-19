import React, {Component} from 'react';
import './ReservationsList.css';

class ReservationsList extends Component {
  state = {
    reservations: []
  };

  componentDidMount() {
    fetch('/reservations')
      .then(res => res.json())
      .then(reservations => this.setState({reservations}))
      .catch(error => console.log(error));
  }

  render() {
    const {reservations} = this.state;
    const listOfReservations = reservations.map(reservation => {
      return (
        <div key={reservation.id} className="reservation">
          <h1 className="reservation__name">{reservation.name}</h1>
          <p className="reservation__date">{reservation.date}</p>
          <p className="reservation__time">{reservation.time}</p>
        </div>
      );
    });

    return (
      <div className="App">
        <h1 className="header">Reservations</h1>
        <div className="container">{listOfReservations}</div>
      </div>
    );
  }
}

export default ReservationsList;
