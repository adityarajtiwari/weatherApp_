const express = require("express");
const app = express();
const PORT = process.env.PORT ||  8000;


app.get("", (req, res) => {
  res.send("Welcome to Aditya hope you have good day");
});

app.get("/about", (req, res) => {
    res.send("Welcome to Aditya in about ka page");
});
  
app.get("/weather", (req, res) => {
    res.send("Welcome to Aditya in weather ka page");
});
  
app.get("*", (req, res) => {
    res.send("Welcome to Aditya in  ka page");
  });
  

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})
