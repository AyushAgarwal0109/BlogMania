const mongoose = require('mongoose');

const subscribeSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const subscription = mongoose.model('Subscription', subscribeSchema);

module.exports = subscription;
