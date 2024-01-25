const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv")
const connectDB = require('./db.js')
const propertyRoutes = require('./routes/propertyRoutes')
const userRoutes = require('./routes/userRoutes')
const shoppinCartRoutes = require('./routes/shoppingCartRoutes')
const stripe = require('stripe')('sk_test_51OcWmhCgiIERxIzh9ZcuK90V2EiQ2BDc1XzhDC1Igc2y2V6cTuTCqJtjuqeumMJAZmV4ZxWYPnypjLw3rJgr0jyf00RpyoDIPh');
// sk_test_51OcWmhCgiIERxIzh9ZcuK90V2EiQ2BDc1XzhDC1Igc2y2V6cTuTCqJtjuqeumMJAZmV4ZxWYPnypjLw3rJgr0jyf00RpyoDIPh
// Luxus Haus: price_1OcXXqCgiIERxIzhj9wy4kqi
// Luxusvilla am Seeufer: price_1OcXYJCgiIERxIzhRrw1IQnT
// Stadthaus mit Panoramablick: price_1OcXYyCgiIERxIzhz5xmHefy


dotenv.config()
connectDB()
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

app.post("/api/checkout", async (req, res) => {
  const items = req.body.items;
  if (!Array.isArray(items)) {
    return res.status(400).json({ error: 'Items must be an array' });
  }

  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({
    url: session.url
  });
});




app.use("/api/property", propertyRoutes)
app.use("/api/user", userRoutes)
app.use("/api/cart", shoppinCartRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
