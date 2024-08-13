const express = require("express");

//importing our db from mongodb
const db = require("./DBcon/connect");

//import our routes
const userRoutes = require("./routes/userRoute");

const app = express();
const PORT = 3000;

//using this middleware to process request from consumer
app.use(express.json());

app.use("/api/v1", userRoutes);

//connecting to our  database
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

//our port
app.listen(PORT, () => {
  console.log(`app listening on http://localhost:${PORT}`);
});
