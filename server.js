const express = require('express');
const cors = require('cors');
const credentials = require('./middleware/credentials')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConfig')
require('dotenv').config()
const corsOptions = require('./config/corsOptions')
const app = express();
const PORT = process.env.PORT || 5000;
const user = require('./routes/api/user');
const resources = require('./routes/api/resources');
const schedules = require('./routes/api/schedules');
const requests = require('./routes/api/requests');
const types = require('./routes/api/types');
const contraints = require('./routes/api/contraints');

// connect to mongoDB
connectDB();
// Handle options credentials check before CORS!
// and fetch cookies credentials requirement
app.use(credentials);
// Cross Origin Resource Sharing
app.use(cors(corsOptions));
app.use(express.json());
// middleware for cookie   
app.use(cookieParser());
// routes
app.use('/api/clients', user)  //endpoint for users
app.use('/api/resources', resources) // endpoint for creating resources
app.use('/api/resources/schedules', schedules)
app.use('/api/resources/request', requests)
app.use('/api/resources-types', types)
app.use('/api/resources-contraints', contraints)

// connecting to the server through mongodb database
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB successfully');
  app.listen(
    PORT, () => console.log(`Server running on port ${PORT}`)
  );
})