const { Hero } = require('../../models');

const getHero = async (req, res, next) => {
  const heroes = await Hero.find({}).exec();
  console.log(heroes);
  return res.status(200).send(heroes);
};

module.exports = getHero;
