/**
 * Connects to RabbitMQ server and waits for messages in the 'hello' queue.
 * @param {Error} err - The error object, if any.
 * @param {Object} connection - The RabbitMQ connection object.
 */
const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, connection) => {
    
        if (err) {
            throw err;
        }
    
    connection.createChannel((err, channel) => {
        const q = 'hello';
    
        channel.assertQueue(q, { durable: false });
        console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', q);
        channel.consume(q, (msg) => {
        console.log(' [x] Received %s', msg.content.toString());
        }, { noAck: true });
    });
    });