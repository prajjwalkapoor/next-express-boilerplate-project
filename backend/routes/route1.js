const express = require("express");
const router = express.Router();
const route1_contr = require('../controllers/route1')
router.route('/route1').get(route1_contr)
module.exports = router