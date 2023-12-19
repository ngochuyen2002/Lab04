const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Card = require("./src/Cards");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

const uri = "mongodb://localhost:27017/myDatabase";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

app.get("/", (req, res) => res.status(200).send("Hello"));

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Card.create(dbCard)
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      console.error("Error creating card:", err);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/dating/cards", (req, res) => {
  Card.find()
    .exec()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.error("Error fetching cards:", err);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(port, () => console.log(`Listening on localhost: ${port}`));
