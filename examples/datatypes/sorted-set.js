const redis = require('../utils/index');
const Chance = require('chance');
const chance = new Chance();

const run =  async() => {
    console.log('******','start run','*********')
    const users = userData();
    for (const user in users) {
      const currentUser = users[user];
      const response = await redis.zaddAsync('users',user,JSON.stringify(currentUser));
      console.log(response);
    }
    console.log('******','end run','*********')
};

const userData = () => {
  users = [];
  for (let index = 0; index < 10; index++) {
    users.push(
      {
        name: chance.name(),
        phone: chance.phone(),
        email: chance.email()
      }
    )        
  }
  return users;
}

run();