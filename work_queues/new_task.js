#!/usr/bin/env node

/**
 * This script connects to RabbitMQ server and sends a message to a task queue.
 * The message can be provided as command line arguments or defaults to "Hello World!".
 * The message is sent to the "task_queue" queue with durability and persistence.
 */
const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (err, connection) => {
  if (err) {
    throw err;
  }

  connection.createChannel((err, channel) => {
    var queue = "task_queue";
    var msg = process.argv.slice(2).join(" ") || "Hello World!";

    channel.assertQueue(queue, {
      durable: true,
    });
    channel.sendToQueue(queue, Buffer.from(msg), {
      persistent: true,
    });
    console.log(" [x] Sent '%s'", msg);
  });
  setTimeout(function () {
    connection.close();
    process.exit(0);
  }, 500);
});
