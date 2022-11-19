const express = require('express');
const Subscriptions = require('./models/Subscription');

const app = express();
const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  try {
    const emailExists = await Subscriptions.findOne({ email });
    if (emailExists) {
      res
        .status(400)
        .json({ status: 'fail', message: 'User already subscribed' });
    }

    const subscribe = await Subscriptions.create({ email });
    if (subscribe) {
      res
        .status(200)
        .json({ status: 'success', message: 'User successfully subscribed' });
    }
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
