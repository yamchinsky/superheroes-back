const { model } = require('mongoose');

const { hero } = require('./schemas');
const { heroSchema } = require('./schemas');

const Hero = model('hero', heroSchema);

module.exports = Hero;
