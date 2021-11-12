const { heroes: service } = require('../../services');

const deleteHero = async (req, res, next) => {
  const { id } = req.params;

  const obj = await service.remove(id);

  return res.status(200).json({
    status: 'success',
    code: 200,
    data: { obj },
    message: 'Object deleted'
  });
};

module.exports = deleteHero;
