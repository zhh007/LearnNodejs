var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 9900 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
