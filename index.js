const router = require('./routes/router');
const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log('Server berjalan di port ' + PORT + "..."));