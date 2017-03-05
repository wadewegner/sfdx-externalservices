var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var routes = require("./routes/routes.js")(app);
 
var server = app.listen(app.get('port'), function () {
    console.log("Listening on port %s...", server.address().port);
});

