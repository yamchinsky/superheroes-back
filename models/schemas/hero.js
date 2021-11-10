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
  },
  superpower: {
    type: String
  },
  phrase: {
    type: String
  },
  image: {
    type: String
  },
  id: {
    type: String
  }
});

module.exports = {
  heroSchema
};
