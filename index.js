// Express
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const port = 3001 || process.env.PORT;

// Files
const bikes = require("./products/bikes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/bikes", (req, res) => {
  const bikesWithImages = bikes.map((bike) => {
    return {
      ...bike,
      imageUrl: `https://bikes-api.onrender.com/bikes/${bike.id}/imagen`, // Configure the URL
    };
  });
  res.json(bikesWithImages);
});

app.get("/bikes/:id/imagen", (req, res) => {
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
  console.log(`Example app listening at http://localhost:${port}`);
});
