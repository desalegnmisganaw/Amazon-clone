const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HiZGVLq8z5x1xnGWBoMZNUFt8MpyF54t8o5n4zeNQ1Twwkkgu4vIxvLNhnzTgGKuVctHeuD5RxQO3PHJGtXjzL100PHu9rjjG")

// API

//API config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log(`Payment Request Recived`, total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })


})

// Listen command
exports.api = functions.https.onRequest(app)

// Example end poinst
// http://localhost:5001/clone-b9d4c/us-central1/api


