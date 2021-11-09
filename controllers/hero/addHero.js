const { heroes: service } = require('../../services');

const addHero = async (req, res) => {
  const { nickname, name, descr, superpower, phrase, image } = req.body;
  console.log(req.body);
  if (!nickname || !name || !descr || !superpower || !phrase || !image) {
    return res.status(400).send({
      err: 'Please enter a characters.'
    });
  }

  try {
    const newHero = await service.add({ ...req.body });

    console.log('newHero', newHero);

    return res.status(201).send(newHero);
  } catch (error) {
    return res.status(500).send({
      msg: 'Unknown error occured.',
      error
    });
  }
};

module.exports = addHero;
