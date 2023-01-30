import { Request, Response } from "express";
import { getMoviesRepository } from "../repositories/moviesRepository.js";

export async function getMoviesController(req: Request, res: Response): Promise<void>{
    try{
        const movies = await getMoviesRepository();
        const orderedMovies = movies.map((movie) => ({
            id: movie.id,
            name: movie.name,
            streamingService: movie.streaming_services.name,
            genre: movie.genres.name,
            alreadyWatched: movie.already_watched 
        }))
        
        res.status(200).send(orderedMovies);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}