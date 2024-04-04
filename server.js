const express = require('express');
const app = express();
const router = express.Router();
const allRoutes = require('./routes/AllRoutes');
const cors = require('cors');

// Middleware
app.use (cors ({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', allRoutes);


const host = process.env.HOST;
const port = process.env.PORT;
app.listen(port, host, () => {
    console.log(`listening to requests at http://${host}:${port}`);
});



