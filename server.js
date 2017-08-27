const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build_webpack')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build_webpack', 'index.html'));
});

app.listen(process.env.PORT || 9000);
