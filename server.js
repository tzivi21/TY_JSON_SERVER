const express = require('express');
const router = express.Router();
const allRoutes = require("./Routes/AllRoutes.js")

const host = process.env.HOST;
const port = process.env.PORT;

server.listen(port, host, () => {
    console.log(`listening to requests at http://${host}:${port}`);
});

//router.use('/', allRoutes)


