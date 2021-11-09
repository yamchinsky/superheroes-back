const { Hero } = require('../models');

const add = ({ ...rest }) => {
  const newHero = new Hero(rest);

  return newHero.save();
};

module.exports = {
  add
};
