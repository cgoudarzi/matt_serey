require('dotenv').config();

var express   = require('express');
    app       = express();
    exphbs    = require('express-handlebars');
    bodyParser = require('body-parser')

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir:   __dirname + '/views/partials',
  layoutsDir:    __dirname + '/views/layouts',
  extname:       '.hbs'
}));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


//Serve static assetts
app.use(express.static(__dirname + "/public"));


require('./models/db');
require('./models/submission');

app.use('/', require('./controllers/home'));


app.listen(8000);

console.log('Server running at port 8000');
