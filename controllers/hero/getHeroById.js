const { heroes: service } = require('../../services');

const getHeroById = async (req, res, next) => {
  const { id } = req.params;
  console.log('id in controllers', id);

  const hero = await service.findHeroById(id);
  console.log('heroId', hero);
  if (hero === null) {
    return res.status(404).send({
      err: `Hero with id of ${hero} was not found.`
    });
  }

  return res.status(200).send(hero);
};

module.exports = getHeroById;
