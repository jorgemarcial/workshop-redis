const redis = require('redis')
const client = redis.createClient()
const fs = require('fs')

client.eval(fs.readFileSync('./debug_script.lua'),0, function(err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res);
  } 
});
