require('./config/config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const jobs = require('./jobs/jobs.routes');
const users = require('./users/users.routers');


const app = express();
const port = process.env.PORT || 9000;
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', jobs);
app.use('/api', users);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`app started at port ${port}`);
});

