const { heroes: service } = require('../../services');

const deleteHero = async (req, res, next) => {
  console.log('req.params1', req.params);
  const { id } = await req.params;

  console.log('req.params2', req.params);

 
  console.log('id', id);
  const obj = await service.remove(id);

  return res.status(200).json({
    status: 'success',
    code: 200,
    data: { obj },
    message: 'Object deleted'
  });
};

module.exports = deleteHero;
