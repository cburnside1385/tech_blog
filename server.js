var express = require("express");
var expresshandle = require("express-handlebars");
const route = require("./controller");
var db = require("./models");
const path = require("path");
var app = express();
const PORT = process.env.PORT || 3001;
const flash = require('connect-flash');

require("dotenv").config();

//Routes 

app.use(express.static(path.join(__dirname, 'Public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use("/", route);
app.use(apiCheck);



// Handlebars
app.engine("handlebars", expresshandle.engine());
app.set("view engine", "handlebars");
app.set('views', './View');





db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, host, function () {
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);


    });
});




module.exports = app;