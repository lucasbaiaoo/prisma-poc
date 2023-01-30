import express from "express";
import cors from "cors";
import postMoviesRoute from "./routes/postMoviesRoute.js";
import getMoviesRoute from "./routes/getMoviesRoute.js";
import getMoviesByIdRoute from "./routes/getMoviesByIdRoute.js";
import updateMoviesByIdRoute from "./routes/updateMoviesById.js";
import deleteMoviesByIdRoute from "./routes/deleteMoviesByIdRoute.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(postMoviesRoute);
server.use(getMoviesRoute);
server.use(getMoviesByIdRoute);
server.use(updateMoviesByIdRoute);
server.use(deleteMoviesByIdRoute);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running in port: ${port}`));