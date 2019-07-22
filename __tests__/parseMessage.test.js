const parseMessage = require('../utils/parseMessage');

test('It should return an array of the message', () => {
  const input = 'Reservation - Jim Halpert - 07/20/2019 - 6:30pm';
  const result = ['Reservation', 'Jim Halpert', '07/20/2019', '6:30pm'];
  const expected = parseMessage(input);

  expect(expected).toEqual(result);
});
