const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  name: String,
  phone: String,
  date: Number,
  time: Number
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;
