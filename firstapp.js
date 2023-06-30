const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Server main page');
});

app.listen(port, () => console.log("Expresso has launched on port " + port));