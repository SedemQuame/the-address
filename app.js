// jshint esversion: 7
// requiring node modules
const http = require(`http`);
const path = require(`path`);
const express = require(`express`);
const bodyParser = require(`body-parser`);

// ========================================== custom packages  ========================================== //
// instantiating new express app
const app = express();


// serving static files in express
const viewPath = path.resolve(__dirname, `views`);
app.set("views", viewPath);
app.set("view engine", "ejs");

// adding middleware to express
app.use(bodyParser.urlencoded({extended: false}));


//====================================== registering required routes ========================================//
require(`./routes/pages.routes`)(app);

// creating some routes
app.all(`/`, function(req, res){
    res.render(`index.views.ejs`);
});

// serving public files
const publicPath = path.resolve(__dirname, `public`);
app.use(express.static(publicPath));

app.use(function(req, res){
    res.end(`404`);
});

// listen for changes on a given port number
const portNumber = (process.env.PORT || 9040 );
http.createServer(app).listen(portNumber, function(){
    console.log(`Classified address app started on port ${portNumber}`);
    console.log(`http://localhost:${portNumber}/`);
});
