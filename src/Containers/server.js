const stripe = require("stripe")(
  "sk_test_51JjKNdDIDeyr99HklqMF9npPDwGgHMEoh3wGeRxZkwZmI8jGomDKK8HHazzmBODHT1P8vjP6A8V3BjSTZsviHic200zTr2nnHd"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000/kassalle";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1JjMZuDIDeyr99HkfdFkaG6U",
        quantity: 1,
      },
    ],
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `https://127.0.0.1:8000/cancel-url`,
    cancel_url: `https://127.0.0.1:8000/success-url`,
    // success_url: `${YOUR_DOMAIN}?success=true`,
    // cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
