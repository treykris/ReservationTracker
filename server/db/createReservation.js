const moment = require('moment');
const {db, Reservations} = require('./models/index');

// Reservation - Restaurant - Name -

const createReservation = async (message, twilioData) => {
  const [name, date, reservationTime] = message;
  let phone = Number(twilioData.From.slice(1, twilioData.From.length));
  //console.log(typeof phone);
  const reservationDateUTC = moment(date, 'MM-DD-YYYY')
    .utc()
    .valueOf();

  const parsedReservationTime = parseInt(reservationTime, 10);
  //console.log(parsedReservationTime);
  const reservationRecord = {
    name,
    time: parsedReservationTime,
    phone,
    date: reservationDateUTC
  };
  const todaysDate = Date.now();

  if (reservationDateUTC < todaysDate) {
    //console.log('heeeeee');
    return `Looks like you made a mistake on the date. Can't make a reservation for a past date.`;
  }

  const closingTime = 10;
  const openingTime = 1;

  if (
    parsedReservationTime < openingTime ||
    parsedReservationTime > closingTime
  ) {
    //console.log('beeeee');
    return 'Sorry the restaurant is closed at that time.';
  }

  try {
    await Reservations.create(reservationRecord);
    // const findRes = await Reservations.findOne({
    //   where: {
    //     date: {
    //       $eq: reservationDateUTC
    //     }
    //   }
    // });
    // console.log(findRes);
    // if (findRes) {
    //   return `Sorry, a reservation for ${reservationTime} has already been taken.`;
    // } else {
    // await Reservations.create(reservationRecord);
    console.log(`Reservation at ${reservationTime} on ${date} confirmed.`);
    return `Reservation at ${reservationTime} on ${date} confirmed.`;
    // }
  } catch (error) {
    return `Sorry, there was an issue creating your reservation`;
  }
};
module.exports = createReservation;
