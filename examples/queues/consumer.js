const RedisSMQ = require("rsmq");
const rsmq = new RedisSMQ( {host: "127.0.0.1", port: 6379, ns: "rsmq"} );


const queuename = "testqueue";

rsmq.receiveMessage({ qname: queuename }, (err, resp) => {
    if (err) {
        console.error(err);
        return;
    }

    // checks if a message has been received
    if (resp.id) {
        console.log("received message:", resp.message);

        // we are done with working on our message, we can now safely delete it
        rsmq.deleteMessage({ qname: queuename, id: resp.id }, (err) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log("deleted message with id", resp.id);
        });
    } else {
        console.log("no available message in queue..");
    }
});