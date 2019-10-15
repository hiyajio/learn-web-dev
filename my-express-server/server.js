const express = require("express");
const app = express();

app.get("/", function (req, res) {
    console.log(req);
    res.send("<h1>Hello, world!</h1>");
});

app.get("/about", function(req, res){
    res.send("Sophomore CS student at Notre Dame.");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: jbuenvia@nd.edu");
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});