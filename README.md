# RabbitMQ JavaScript Project

This project is a collection of JavaScript examples demonstrating the use of RabbitMQ, a robust message broker for handling distributed systems. The project is structured into different sections, each focusing on a different aspect of RabbitMQ.

## Project Structure

- **Publish_Subscribe**: This directory contains examples of the publish/subscribe pattern. [`emit_log.js`](command:_github.copilot.openRelativePath?%5B%22Publish_Subscribe%2Femit_log.js%22%5D "Publish_Subscribe/emit_log.js") is used to emit log messages, [`receive_logs.js`](command:_github.copilot.openRelativePath?%5B%22Publish_Subscribe%2Freceive_logs.js%22%5D "Publish_Subscribe/receive_logs.js") is used to receive log messages, and `logs.from.txt` and `logs_from_the_tale.js` are example log files.

- **Routing**: This directory contains examples of the routing pattern. `emit_from_log.js` is used to emit log messages with a routing key, and [`receive_logs_direct.js`](command:_github.copilot.openRelativePath?%5B%22Routing%2Freceive_logs_direct.js%22%5D "Routing/receive_logs_direct.js") is used to receive log messages with a specific routing key.

- **Topics**: This directory contains examples of the topic exchange pattern. [`emit_log_topic.js`](command:_github.copilot.openRelativePath?%5B%22Topics%2Femit_log_topic.js%22%5D "Topics/emit_log_topic.js") is used to emit log messages with a topic, and [`receive_log_topic.js`](command:_github.copilot.openRelativePath?%5B%22Topics%2Freceive_log_topic.js%22%5D "Topics/receive_log_topic.js") is used to receive log messages based on a topic pattern.

- **Work Queues**: This directory contains examples of the work queue pattern. [`new_task.js`](command:_github.copilot.openRelativePath?%5B%22work_queues%2Fnew_task.js%22%5D "work_queues/new_task.js") is used to create new tasks, and [`worker.js`](command:_github.copilot.openRelativePath?%5B%22work_queues%2Fworker.js%22%5D "work_queues/worker.js") is used to process tasks from the queue.

- **RPC**: This directory contains examples of the remote procedure call (RPC) pattern. [`rpc_client.js`](command:_github.copilot.openRelativePath?%5B%22rpc%2Frpc_client.js%22%5D "rpc/rpc_client.js") is used to send RPC requests, and [`rpc_server.js`](command:_github.copilot.openRelativePath?%5B%22rpc%2Frpc_server.js%22%5D "rpc/rpc_server.js") is used to process RPC requests and send responses.

- [`send.js`](command:_github.copilot.openRelativePath?%5B%22send.js%22%5D "send.js") and [`receive.js`](command:_github.copilot.openRelativePath?%5B%22receive.js%22%5D "receive.js") are basic examples of sending and receiving messages with RabbitMQ.

## Getting Started

1. Install the project dependencies by running `npm install` in the root directory.
2. Start your RabbitMQ server.
3. Run the scripts in each directory to see the different RabbitMQ patterns in action.

## Requirements

- Node.js
- RabbitMQ

This project is a great starting point for anyone looking to understand how RabbitMQ works and how it can be used in JavaScript applications. Each script is a standalone example of a specific RabbitMQ pattern, making it easy to understand and learn each concept separately.