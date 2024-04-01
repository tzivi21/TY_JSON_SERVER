const express = require('express');
const app = express();
const router = express.Router();
const allRoutes = require('./Routes/AllRoutes');
const http = require('http');

app.use(express.json());

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`listening to requests at http://${host}:${port}`);
});

app.use('/', allRoutes)


