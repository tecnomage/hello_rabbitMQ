/**
 * Sends a message to a RabbitMQ queue.
 * @param {string} msg - The message to be sent.
 */
const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, connection) => {

    if (err) {
        throw err;
    }

  connection.createChannel((err, ch) => {
    const q = 'hello';
    const msg = 'Hello World!';

    ch.assertQueue(q, { durable: false });
    ch.sendToQueue(q, Buffer.from(msg));
    console.log(' [x] Sent %s', msg);
  });
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});