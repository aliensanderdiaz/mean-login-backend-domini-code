'use strict'

const express = require('express');
const cors = require('cors');
const app = express();

const properties = require('./config/properties');
const authRoutes = require('./auth/auth.routes');

const DB = require('./config/db');

DB();

const router = express.Router();

app.use(express.json())
app.use(cors())

app.use('/api', router);
authRoutes(router)

router.get('/', (req, res) => {
    res.send('Hello from home');
})

app.use(router);


app.listen(properties.PORT, () => console.log(`listening on http://localhost:${properties.PORT}`));