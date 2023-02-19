const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error")

app.use(express.json())

// Route Imports
const product = require("./routes/productRoute");
const user = require('./routes/userRoute');
const notification = require('./routes/notificationRoute');

app.use('/api/v1',product);
app.use('/api/v1', user);
app.use('/api/v1', notification);

// Middleware
app.use(errorMiddleware)

module.exports = app