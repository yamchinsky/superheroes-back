const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const router = express.Router();

const { hero: ctrl } = require('../../controllers');

router.post('/', ctrlWrapper(ctrl.addHero));

module.exports = router;
