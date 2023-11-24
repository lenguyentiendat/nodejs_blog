const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs  = require('express-handlebars');

const app = express()
const port = 3000
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

//http logger
//app.use(morgan('combined'))

//template engines
app.engine('hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Init route
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

