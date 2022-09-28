const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Define session parameters
const sess = 
{
    secret: 'Secret?',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize })
}

app.use(session(sess));

// Include helper functions into handlebars, and set app's render engine to handlebars
const hbs = handlebars.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Sync the database, then listen on set PORT
sequelize.sync({ force: false }).then( () =>
{
    app.listen(PORT, () => console.log('Now listening on port: ', PORT));
})