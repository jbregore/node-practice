import express from "express";
import dotenv from "dotenv";

//router
import beerRoutes from "./routes/beers.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/beers", beerRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));









