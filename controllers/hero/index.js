const getHero = require('./getHero');
const getHeroById = require('./getHeroById');
const getHeroByName = require('./getHeroByName');
const addHero = require('./addHero');
const deleteHero = require('./deleteHero');
const updateHero = require('./updateHero');

module.exports = {
  addHero,
  getHero,
  deleteHero,
  getHeroById,
  getHeroByName,
  updateHero
};
