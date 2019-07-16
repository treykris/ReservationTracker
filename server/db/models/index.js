const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/reservations', {
  logging: false
});

const Reservations = db.define('reservations', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.BIGINT
  },
  date: {
    type: Sequelize.BIGINT
  },
  time: {
    type: Sequelize.INTEGER
  },
  restaurant: {
    type: Sequelize.STRING,
    defaultValue: 'Sallys'
  }
});

// const Restaurant = db.define('restaurant', {
//   name: {
//     type: Sequelize.STRING
//   },
//   openat: {
//     type: Sequelize.INTEGER
//   },
//   closeat: {
//     type: Sequelize.INTEGER
//   }
// });

// Restaurant.hasMany(Reservations);
// Reservations.belongsTo(Restaurant);

db.authenticate().then(() => {
  console.log('connected to the database');
});

module.exports = {
  db,
  Reservations
};
