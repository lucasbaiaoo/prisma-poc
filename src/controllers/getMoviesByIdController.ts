import { Request, Response } from "express";
import { getMovieByIdRepository } from "../repositories/moviesRepository.js";

export async function getMoviesByIdController(req: Request, res: Response): Promise<void>{
    const id: number = parseInt(req.params.id);
    
    try{
        const movieById = await getMovieByIdRepository(id);
        const orderedMovieById = movieById.map((movie) => ({
            id: movie.id,
            name: movie.name,
            streamingService: movie.streaming_services.name,
            genre: movie.genres.name,
            alreadyWatched: movie.already_watched 
        }))

        res.status(200).send(orderedMovieById)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}