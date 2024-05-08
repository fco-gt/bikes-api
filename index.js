// Dotenv
require("dotenv").config();

// Express
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const hbs = require("hbs");
const port = 3001 || process.env.PORT;
const URL = process.env.URL;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

// Router
app.use("/", require("./router/router"));

// Views
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

// Files
const bikes = require("./products/bikes");

app.get("/api/bikes", (req, res) => {
  const bikesWithImages = bikes.map((bike) => {
    return {
      ...bike,
      imageUrl: `${URL}/api/bikes/${bike.id}/imagen`, // Configure the URL
    };
  });
  res.json(bikesWithImages);
});

app.get("/api/bikes/:id", (req, res) => {
  const { id } = req.params;
  const numId = parseInt(id);

  let bike = bikes.find((b) => b.id === numId);
  console.log(bike);

  if (bike) {
    res.json(bike);
  } else {
    res.status(404).send("Bike not found");
  }
});

app.get("/api/bikes/:id/imagen", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const bike = bikes.find((bike) => bike.id === parseInt(id));
  console.log(bike);
  if (bike) {
    const imagePath = path.join(
      __dirname,
      `products/imgs/bikes/${bike.id}.png`
    );
    res.sendFile(imagePath);
  } else {
    res.status(404).send("Bike not found");
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
