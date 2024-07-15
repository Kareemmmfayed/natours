const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello form the server side!');
});

app.post('/', (req, res) => {
  res.send('You can post to this end point!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
