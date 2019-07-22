const moment = require('moment');
const Reservation = require('./models/reservations');
const mockRestaurants = require('./mockRestaurants');
const ReservationResponse = require('../constants').ReservationResponse;

const createReservation = async (message, apiData) => {
  const [name, date, reservationTime] = message;
  const reservationDate = moment(date, 'MM-DD-YYYY')
    .utc()
    .valueOf();
  const parsedReservationTime = parseInt(reservationTime, 10) + 12;
  const reservationRecord = {
    name,
    time: parsedReservationTime,
    date: reservationDate,
    data: apiData
  };
  const todaysDate = Date.now();
  const hoursToMS = 1000 * 60 * 60 * 24;
  const {closesAt, opensAt} = mockRestaurants[0];
  const oneHour = 1;

  if (reservationDate < todaysDate) {
    return ReservationResponse.PAST_DATE;
  }

  if (parsedReservationTime < opensAt || parsedReservationTime >= closesAt)
    return ReservationResponse.CLOSED;

  try {
    const takenReservation = await Reservation.findOne({
      date: reservationDate,
      $and: [
        {time: {$gte: parsedReservationTime}},
        {time: {$lt: parsedReservationTime + oneHour}}
      ]
    });
    if (takenReservation) return ReservationResponse.FILLED(reservationTime);

    const newReservation = await Reservation.create(reservationRecord);
    if (newReservation)
      return ReservationResponse.CONFIRMED(reservationTime, date);
  } catch (error) {
    return ReservationResponse.ISSUE;
  }
};
module.exports = createReservation;
