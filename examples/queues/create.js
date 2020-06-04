const RedisSMQ = require("rsmq");
const rsmq = new RedisSMQ( {host: "127.0.0.1", port: 6379, ns: "rsmq"} );


const queuename = "testqueue";

rsmq.createQueue({ qname: queuename }, (err) => {
    if (err) {
        // if the error is `queueExists` we can keep going as it tells us that the queue is already there
        if (err.name !== "queueExists") {
            console.error(err);
            return;
        } else {
            console.log("queue exists.. resuming..");
        }
    }
})

console.log('**********');