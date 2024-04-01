const express = require('express');
const app = express();
const router = express.Router();
const allRoutes = require('./routes/AllRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', allRoutes);


const host = process.env.HOST;
const port = process.env.PORT;
app.listen(port, host, () => {
    console.log(`listening to requests at http://${host}:${port}`);
});



