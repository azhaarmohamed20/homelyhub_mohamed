const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv")
const connectDB = require('./db.js')
const propertyRoutes = require('./routes/propertyRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB()
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


app.use("/api/property", propertyRoutes)
app.use("/api/user", userRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
