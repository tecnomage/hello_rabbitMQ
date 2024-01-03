#!/usr/bin/env node
/**
 * This script connects to RabbitMQ server and consumes messages from a task queue.
 * It waits for messages in the "task_queue" queue, processes them, and acknowledges their completion.
 * The number of messages processed concurrently is limited to 1.
 * 
 * @requires amqplib/callback_api
 * @param {Error} err - The error object, if any, encountered during connection.
 * @param {Object} connection - The RabbitMQ connection object.
 */
const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (err, connection) => {
  if (err) {
    console.log(err);
    throw err;
  }

  connection.createChannel((error1, channel) => {
    if (error1) {
      console.log(error1);
      throw error1;
    }

    const queue = "task_queue";

    channel.assertQueue(queue, {
      durable: true,
    });

    channel.prefetch(1);
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(
      queue,
      (msg) => {
        const secs = msg.content.toString().split(".").length - 1;

        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(() => {
          console.log(" [x] Done");
          channel.ack(msg);
        }, secs * 1000);
      },
      {
        noAck: false,
      }
    );
  });
});
