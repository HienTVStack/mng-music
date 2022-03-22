const express = require('express');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;
// Router connect
const router = require('./routers');
const db = require('./config/db');

db.connect();
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());
app.use(methodOverride('_method'));
// Template engine
const hbs = handlebars.create({extname: 'hbs'});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources', 'views'));

router(app);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
    console.log(path.join(__dirname, 'public'))
});