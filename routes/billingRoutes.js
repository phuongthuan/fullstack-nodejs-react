const keys = require('../config/key');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {

    const charge = await stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      description: '10$ for 10 credits',
      source: req.body.id
    });

    req.user.credits += 10;
    const user = await req.user.save();

    res.send(user);
  });
};