const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const registrationRoutes = require('./routes/registrationRoutes');


const app = express();
connectDB();


app.use(cors());
app.use(bodyParser.json());


app.use('/events', eventRoutes);
app.use('/registrations', registrationRoutes);


const PORT = process.env.PORT || 2001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
