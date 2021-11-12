const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const router = express.Router();

const { hero: ctrl } = require('../../controllers');

router.get('/', ctrlWrapper(ctrl.getHero));
router.get('/name/:name', ctrlWrapper(ctrl.getHeroByName));
router.get('/:id', ctrlWrapper(ctrl.getHeroById));
router.post('/', ctrlWrapper(ctrl.addHero));
router.put('/:id', ctrlWrapper(ctrl.updateHero));
router.delete('/:id', ctrlWrapper(ctrl.deleteHero));

module.exports = router;
