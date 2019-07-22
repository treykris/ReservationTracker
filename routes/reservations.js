var express = require('express');
var router = express.Router();
const Reservation = require('../db/models/reservations');
const moment = require('moment');

router.get('/', async (req, res, next) => {
  const todaysDate = Date.now();
  const currentHour = new Date().getHours() % 12;
  const reservations = await Reservation.find({
    date: {$gte: todaysDate},
    time: {$gte: currentHour}
  });

  const updatedReservations = reservations.map(reservation => {
    const newReservation = {
      id: reservation._id,
      name: reservation.name,
      time: reservation.time - 12 + `pm`,
      date: moment(reservation.date).format('L')
    };

    return newReservation;
  });

  res.json(updatedReservations);
});

module.exports = router;
