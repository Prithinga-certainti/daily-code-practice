const express = require('express');
const app = express();

const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());
app.use('/', studentRoutes);

app.listen(3000);