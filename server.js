const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server online');
});