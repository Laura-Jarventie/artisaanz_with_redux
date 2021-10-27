require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
let itemsFromDb = undefined;

const storeItems = async () => {
  const result = await axios.get("https://artisaanz.herokuapp.com/cart/all");
  console.log(result.data[0]);

  itemsFromDb = new Map([
    [
      1,
      { priceInCents: result.data[0].hinta * 100, name: result.data[0].nimi },
    ],
    [
      2,
      { priceInCents: result.data[1].hinta * 100, name: result.data[1].nimi },
    ],
    [
      3,
      { priceInCents: result.data[2].hinta * 100, name: result.data[2].nimi },
    ],
    [
      4,
      { priceInCents: result.data[3].hinta * 100, name: result.data[3].nimi },
    ],
    [
      5,
      { priceInCents: result.data[4].hinta * 100, name: result.data[4].nimi },
    ],
    [
      6,
      { priceInCents: result.data[5].hinta * 100, name: result.data[5].nimi },
    ],
    [
      7,
      { priceInCents: result.data[6].hinta * 100, name: result.data[6].nimi },
    ],
    [
      8,
      { priceInCents: result.data[7].hinta * 100, name: result.data[7].nimi },
    ],
  ]);
  console.log(itemsFromDb);
  return itemsFromDb;
};
const itemsFinal = storeItems();
// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: "Test product 1" }],
//   [2, { priceInCents: 20000, name: "Leipä" }],
// ]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = itemsFromDb.get(item.id);
        // const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "eur",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.SERVER_URL}/kotisivu`,
      cancel_url: `${process.env.SERVER_URL}/ostoskori`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3001);
