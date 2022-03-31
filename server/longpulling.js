const express = require('express');
const cors = require('cors');
const events = require('events');

const emitter = new events.EventEmitter();

const PORT = 6000;

const app = express();

app.use(cors());

app.get('get-messages', (req, res) => {
  emitter.once('newMessage', (message) => {
    res.json(message);
  })
});

app.post('new-messages', (req, res) => {
  const message = req.body;
  emitter.emit('newMessage', message);
  res.status(200)
});

app.listen(PORT, () => console.log(`server started in port ${PORT}`));
