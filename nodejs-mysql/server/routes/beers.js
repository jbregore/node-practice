import express from "express";

// controllers
import {
    getBeers, getBeer, deleteBeer,
    createBeer, updateBeer, 
} from "../controllers/beers.js";

//middleware
// import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getBeers);
router.get("/:id", getBeer);
router.post("/", createBeer);
router.put("/:id", updateBeer);
router.delete("/:id", deleteBeer);

export default router;