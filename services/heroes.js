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

const update = async (id, data) => {
  const result = await Hero.findByIdAndUpdate({ _id: id }, data, { new: true });

  return result;
};

const remove = async id => {
  const result = await Hero.findByIdAndRemove({ _id: id });

  return result;
};

module.exports = {
  getHeroName,
  add,
  update,
  remove,
  findHeroById
};
