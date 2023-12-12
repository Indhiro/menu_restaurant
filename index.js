const router = require('./routes/router');
const sequelize = require('./config/config');
const express = require('express');
require('dotenv').config()
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

sequelize.sync()
app.listen(3000 || process.env.PORT, () => console.log('Server berjalan di port 3000' + "..."));