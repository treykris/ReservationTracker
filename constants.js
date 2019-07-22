const ReservationResponse = {
  PAST_DATE: `Looks like you made a mistake on the date. Can't make a reservation for a past date.`,
  CLOSED: 'Sorry the restaurant is closed at that time.',
  FILLED: function(time) {
    return `Sorry, a reservation for ${time} has already been filled.`;
  },
  CONFIRMED: function(time, date) {
    return `Reservation at ${time} on ${date} confirmed.`;
  },
  ERROR: `Sorry, there was an issue creating your reservation`
};

module.exports = {
  ReservationResponse
};
