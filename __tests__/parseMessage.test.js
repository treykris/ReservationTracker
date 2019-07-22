const parseMessage = require('../utils/parseMessage');

test('It should return an array of the message', () => {
  const input = 'Reservation - Jim Halpert - 07/20/2019 - 6:30pm';
  const result = ['Reservation', 'Jim Halpert', '07/20/2019', '6:30pm'];
  const expected = parseMessage(input);

  expect(expected).toEqual(result);
});

test("It should return user's name as the second index", () => {
  const input = 'Reservation - Jim Halpert - 07/20/2019 - 6:30pm';
  const result = 'Jim Halpert';
  const expected = parseMessage(input);

  expect(expected[1]).toEqual(result);
});
