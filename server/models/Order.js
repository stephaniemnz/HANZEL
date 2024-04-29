const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Photo'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
