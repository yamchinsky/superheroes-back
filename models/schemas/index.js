const user = require('./user');
const hero = require('./hero');
const { userSchema } = require('./user');
const { heroSchema } = require('./hero');

module.exports = {
  user,
  hero,
  userSchema,
  heroSchema
};
