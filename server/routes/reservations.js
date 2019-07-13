var express = require('express');
var router = express.Router();

/* GET reservations listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: 'Matt Hijo, party of 2 @ 8pm'},
    {id: 2, name: 'Patrick Milo, party of 5 @ 2pm'}
  ]);
});

module.exports = router;
