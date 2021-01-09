const express = require('express');
const app = express();
const connectDB = require('./config/db');

//Uncomment when done to connect database
// connectDB();
app.get('/',(req, res) => res.send('Running'));

//Routes

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 8492
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));