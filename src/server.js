const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/fisz', function (req, res) {
 return res.send('fasz');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('app is running on port 8080')
});