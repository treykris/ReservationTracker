const createReservation = require('../db/createReservation');
const {ReservationResponse} = require('../constants');

test('Should return not able to make a reservation for a past date', async () => {
  const input = ['Testy McTesty', '07/10/2019', '6:30pm'];
  const expected = await createReservation(input, {});
  const result = ReservationResponse.PAST_DATE;
  expect(expected).toEqual(result);
});

test('Should not make a reservation for before opening time ', async () => {
  const input = ['Testy McTesty', '07/29/2020', '12:30pm'];
  const expected = await createReservation(input, {});
  const result = ReservationResponse.CLOSED;
  expect(expected).toEqual(result);
});

test('Should not make a reservation for after closing time ', async () => {
  const input = ['Testy McTesty', '07/29/2020', '10:30pm'];
  const expected = await createReservation(input, {});
  const result = ReservationResponse.CLOSED;
  expect(expected).toEqual(result);
});
