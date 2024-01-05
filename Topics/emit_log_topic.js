#!/usr/bin/env node
/**
 * This script connects to a RabbitMQ server and publishes a message to a topic exchange.
 * It takes command line arguments to specify the routing key and message content.
 * If no arguments are provided, it uses a default routing key and message.
 * The exchange is declared as non-durable and the message is sent as a Buffer.
 */

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    console.log(process.argv);
    var exchange = 'topic_logs';
    var args = process.argv.slice(2);
    var key = (args.length > 0) ? args[0] : 'anonymous.info';
    var msg = args.slice(1).join(' ') || 'Hello World!';

    channel.assertExchange(exchange, 'topic', {
      durable: false
    });
    channel.publish(exchange, key, Buffer.from(msg));
    console.log(" [x] Sent %s:'%s'", key, msg);
  });

  setTimeout(function() {
    connection.close();
    process.exit(0)
  }, 500);
});