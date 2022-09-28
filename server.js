const path = require('path');
const express = require('express');
// TODO: include session: 'express-session'
// TODO: include handlebars: 'express-handlebars'
// TODO: include sql_store: 'connect-session-sequelize'

const routes = require('./controllers');
const sequelize = require('./config/connection');
// TODO: include helper functions

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Define session parameters
// const sess = {}
//
// app.use(session(sess));

// TODO: Include helper function with handlebars module

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// TODO Uncomment the following line when 'public' folder is added
// app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// TODO: Require that the sequelize database is synced before listening
sequelize.sync({ force: false }).then( () =>
{
    app.listen(PORT, () => console.log('Now listening on port: ', PORT));
})