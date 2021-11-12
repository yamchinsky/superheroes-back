const { heroes: service } = require('../../services');

const updateHero = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  const obj = await service.update(id, data);

  return res.status(200).json({
    status: 'success',
    code: 200,
    data: { obj },
    message: 'Object updateed'
  });
};

module.exports = updateHero;
