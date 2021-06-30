const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userAuthRoutes = require("./routes/userAuth");
const adminRoutes = require("./routes/admin");
const publicationRoutes = require("./routes/publication");
const workshopRoutes = require("./routes/workshop");
const researcherRoutes = require("./routes/researcher");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", userAuthRoutes);
app.use("/admin", adminRoutes);
app.use("/publication", publicationRoutes);
app.use("/workshop", workshopRoutes);
app.use("/researcher", researcherRoutes);
mongoose
    .connect(
        "mongodb+srv://shalitha:JaQSeqkhtO7235CB@conference-data.vet1s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((result) => {
        app.listen(3000);
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err);
    });
