const express = require('express');
const cors = require('cors');
const port = 8000;

require('./config/mongoose.config');

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/joke.routes");
AllMyUserRoutes(app);


app.listen(port, () => console.log("The server is all fired up on port 8000"));
