/**
 * !!! TODO:
 * If restaurant is available let user know their request is confirmed
 * If not available let user know the reservation is taken
 */
const createReservation = (message, twilioData) => {
  const [name, date, reservationTime] = message;
  const reservationRecord = {
    name,
    date,
    reservationTime,
    twilioData
  };

  if (Math.floor(Math.random() * 10) >= 6) {
    return `Reservation at ${reservationTime} on ${date} confirmed.`;
  }

  return `Sorry, a reservation for ${reservationTime} has already been taken.`;
};

module.exports = createReservation;
