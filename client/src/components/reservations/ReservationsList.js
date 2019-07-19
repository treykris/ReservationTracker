import React, {Component} from 'react';

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
        <div key={reservation.id}>
          <h1>{reservation.name}</h1>
          <p>{reservation.date}</p>
          <p>{reservation.time}</p>
        </div>
      );
    });

    return (
      <div className="App">
        <h1>Reservations</h1>
        {listOfReservations}
      </div>
    );
  }
}

export default ReservationsList;
