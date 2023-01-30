import { Request, Response } from "express";
import { getGenreIdRepository } from "../repositories/genresRepository.js";
import { moviesInsertionRepository } from "../repositories/moviesRepository.js";
import { getStreamingIdRepository } from "../repositories/streamingServicesRepository.js";

export async function postMoviesController(req: Request, res: Response): Promise<void>{
    const name: string = req.body.name;
    const streamingService: string = req.body.streamingService;
    const genre: string = req.body.genre;

    try{
        const streamingServiceId = await getStreamingIdRepository(streamingService);
        const genreId  = await getGenreIdRepository(genre);

        await moviesInsertionRepository(name, streamingServiceId.rows[0].id, genreId.rows[0].id);
        res.sendStatus(201);    
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}