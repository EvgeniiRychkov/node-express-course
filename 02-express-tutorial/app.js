const express = require('express');
const app = express();
const port = 3000;
const { products } = require("./data");
// Middleware
app.use(express.static("./public"));

app.get("/about", (req, res) => {
  return res.status(200).sendFile(__dirname + "/public/about.html");
});

app.get("/api/v1/test", (req, res) => {
  return res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  return res.json({ products });
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID); 
  const product = products.find((p) => p.id === idToFind);  
  
  if (!product) {
    return res.status(404).json({ msg: `No product with id ${idToFind}` });
  }

  return res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  let { search, limit, maxPrice } = req.query;
  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (maxPrice) {
    maxPrice = parseFloat(maxPrice);
    filteredProducts = filteredProducts.filter((product) => product.price < maxPrice);
  }

  if (limit) {
    limit = parseInt(limit);
    filteredProducts = filteredProducts.slice(0, limit);
  }

  return res.json(filteredProducts);
});

app.all("*", (req, res) => {
  res.send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});