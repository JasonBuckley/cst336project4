var faker = require('faker');

var randomSpecs = {
    ram: faker.random.number,
    rom: faker.random.number,
    gram: faker.random.boolean
};

module.exports = randomSpecs;