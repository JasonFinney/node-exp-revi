var express = require("express");
var app = express();
var PORT = 9000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/htmlRouting")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

