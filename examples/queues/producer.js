const RedisSMQ = require("rsmq");
const rsmq = new RedisSMQ( {host: "127.0.0.1", port: 6379, ns: "rsmq"} );


const queuename = "testqueue";

rsmq.sendMessage({ qname: queuename, message: `Hello World at ${new Date().toISOString()}`, delay: Math.floor(Math.random() * 6) }, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("pushed new message into queue..");
});