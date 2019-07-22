const getRestaurantInfo = require('../db/getRestaurantInfo');

test('Mock Restaurant should return correct open and close times', () => {
  const input = 'Chows';
  const expected = getRestaurantInfo([input]);
  const result = 'Chows opens at 13 and closes at 22.';

  expect(expected).toEqual(result);
});
