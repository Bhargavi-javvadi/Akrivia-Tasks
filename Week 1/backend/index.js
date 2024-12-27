const express = require("express");
const { db } = require("./Database/Dbconnect.js");
const userRouter = require('./router/userRouter.js');
const port = process.env.PORT || 4000;
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');  // Importing CORS

db();
app.use(cookieParser());
app.use(express.json());

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:4200', // Specify the frontend origin (replace with your frontend URL)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    credentials: true // Allow cookies to be sent with requests
}));

app.get("/", (req, res) => {
    res.send("Hello, world! The server is running.");
});

app.use("/api/v1/user", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});