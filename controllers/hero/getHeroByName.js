const { heroes: service } = require('../../services');

const getHeroByName = async (req, res, next) => {
  const { name } = req.params;
  console.log('req.params', req.params);
  console.log('name', name);
  if (!name) {
    return res.status(400).send({
      err: 'Please enter a character name'
    });
  }

  const heroByName = await service.getHeroName(name);

  if (!heroByName.length) {
    return res.status(404).send({
      err: `No hero found by character named ${name}.`
    });
  }

  return res.send(heroByName);
};

module.exports = getHeroByName;
