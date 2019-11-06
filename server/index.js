require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`I have ${SERVER_PORT} bugs...don't cross me.`))
})