import { Router } from "express";
import { getMoviesController } from "../controllers/getMoviesController.js";

const router: Router = Router();

router.get("/movies", getMoviesController);

export default router;