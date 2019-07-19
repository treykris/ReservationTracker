const restaurants = require('./mockRestaurants');

const getRestaurantInfo = message => {
  const [restaurant] = message;
  const {opensAt, closesAt} = restaurants[0];
  return `${restaurant} opens at ${opensAt} and closes at ${closesAt}.`;
};

module.exports = getRestaurantInfo;
