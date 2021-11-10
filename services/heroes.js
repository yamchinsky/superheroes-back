const { Hero } = require('../models');

const add = ({ ...rest }) => {
  const newHero = new Hero(rest);

  return newHero.save();
};

const remove = async id => {
  console.log(id);

  const hero = await Hero.findById(id);

  if (!hero || hero.length < 1) return false;

  const result = await Hero.findByIdAndRemove(id);

  return result;
};

module.exports = {
  add,
  remove
};
