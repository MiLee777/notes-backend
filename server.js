const express = require('express');
const app = express();
const routes = require('./Routes');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT = 7000 || process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(process.env.MONGODB_LINK)
  .then(() => console.log('We were connected to MONGO'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})