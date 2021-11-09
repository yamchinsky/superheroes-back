const { Schema } = require('mongoose');

const heroSchema = Schema({
  nickname: {
    type: String
  },
  name: {
    type: String
  },
  descr: {
    type: String
  }
});

module.exports = {
  heroSchema
};
