const redis = require('../utils/index');
const Chance = require('chance');
const chance = new Chance();

const run =  async() => {
    console.log('******','start run','*********')
    for (let index = 0; index < 10; index++) {
        redis.lpushAsync('rewards', chance.hash({length: 10}))
    }    
    console.log('******','end run','*********')
};

run();