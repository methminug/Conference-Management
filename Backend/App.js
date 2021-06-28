const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userAuth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", feedRoutes);
mongoose
    .connect(
        "mongodb+srv://shalitha:JaQSeqkhtO7235CB@conference-data.vet1s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((result) => {
        app.listen(3000);
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err);
    });