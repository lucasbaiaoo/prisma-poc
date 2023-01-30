import { Router } from "express";
import { getMoviesByIdController } from "../controllers/getMoviesByIdController.js";
import { moviesIdsMiddleware } from "../middlewares/moviesIdsMiddleware.js";

const router: Router = Router();

router.get("/movies/:id", moviesIdsMiddleware, getMoviesByIdController);

export default router;