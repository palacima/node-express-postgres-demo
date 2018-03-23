const { Router } = require('express');
const characters = require('./characters');
const locations = require('./locations');
// const traveled = require('./traveled');

const router = Router();

router.use('/charascters', characters);
router.use('/locations', locations);
// router.use('/traveled', traveled);

module.exports = router;
