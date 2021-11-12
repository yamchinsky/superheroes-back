const getHero = require('./getHero');
const getHeroById = require('./getHeroById');
const getHeroByName = require('./getHeroByName');
const addHero = require('./addHero');
const deleteHero = require('./deleteHero');

module.exports = {
  addHero,
  getHero,
  deleteHero,
  getHeroById,
  getHeroByName
};
