const getCurrentUser = async (req, res, next) => {
  const { email } = req.user;
  res.json({
    status: 'success',
    code: 200,
    email
  });
};

module.exports = getCurrentUser;
