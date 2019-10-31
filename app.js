const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
var random = require('./routes/random'); // middleware that randomly generates memory values.

//routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/internetExplorer", function(req, res) {
    res.render("internetExplorer.html");
});

app.get("/ms-dos", function(req, res) {
    res.render("ms-dos.html", {ram: random.ram(), rom: random.rom(), gram: random.gram()});
});

app.get("/windows10", function(req, res) {
    res.render("windows10.html");
});

// ////////////// testing locally //////////////
// app.listen("8080", "127.0.0.1", function() {
//     console.log("Express Server is Running...");
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...");
});
