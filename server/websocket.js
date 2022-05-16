const ws = require('ws');

const wss = new ws.Server({
    port: 6000,
}, () => console.log('Server started on 6000'));

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        message = JSON.parse(message);
        switch (message.event) {
            case 'message':
                broadcastMessage(message);
                break;
            case 'connection':
                broadcastMessage(message);
                break;
        }
    })
})

function broadcastMessage(message, id) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}