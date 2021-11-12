const { Hero } = require('../models');

const add = ({ ...rest }) => {
  const newHero = new Hero(rest);

  return newHero.save();
};

const findHeroById = async id => {
  console.log('id in services', id);
  const hero = await Hero.findOne({ _id: id }).exec();
  return hero;
};

const getHeroName = async heroName => {
  const heroByName = await Hero.find({
    name: new RegExp(heroName, 'i')
  }).exec();

  return heroByName;
};

const remove = async id => {
  const result = await Hero.findByIdAndRemove({ _id: id });

  return result;
};

module.exports = {
  add,
  remove,
  findHeroById,
  getHeroName
};
