require('./config/config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const jobs = require('./routes/jobs.routes');


const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', jobs);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`app started at port ${port}`);
});

