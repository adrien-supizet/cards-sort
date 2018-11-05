const Hapi = require('hapi');
const { hostName, hostPort } = require('./config');

const server = new Hapi.Server({
  host: hostName,
  port: hostPort || 4000,
  routes: {
    cors: true
  }
});

server.init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

server.init();

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

process.on('SIGINT', async () => {
  console.log('stopping hapi server');
  server.stop({ timeout: 10000 }).then(err => {
    console.log('hapi server stopped- ' + err);
    process.exit(err ? 1 : 0);
  });
});

module.exports = server;
