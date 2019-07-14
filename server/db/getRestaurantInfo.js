const mockRestaurant = {
  opens_at: '10am',
  closes_at: '10pm'
};

const getRestaurantInfo = message => {
  const [restaurant] = message;
  const {opens_at, closes_at} = mockRestaurant;
  return `${restaurant} opens at ${opens_at} and closes at ${closes_at}.`;
};

module.exports = getRestaurantInfo;
