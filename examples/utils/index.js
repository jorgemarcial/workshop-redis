const redis = require('redis');
const client = redis.createClient();

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);
const lpushAsync = promisify(client.lpush).bind(client);
const saddAsync = promisify(client.sadd).bind(client);
const hsetAsync = promisify(client.hset).bind(client);
const zaddAsync = promisify(client.zadd).bind(client);
const xaddAsync = promisify(client.xadd).bind(client);

module.exports = {
    setAsync: setAsync,
    lpushAsync: lpushAsync,
    saddAsync: saddAsync,
    hsetAsync: hsetAsync,
    zaddAsync: zaddAsync,
    xaddAsync: xaddAsync
}
