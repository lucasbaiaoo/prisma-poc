import { Request, Response } from "express";
import { getGenreIdRepository } from "../repositories/genresRepository.js";
import { moviesInsertionRepository } from "../repositories/moviesRepository.js";
import { getStreamingServiceIdRepository } from "../repositories/streamingServicesRepository.js";

export async function postMoviesController(req: Request, res: Response): Promise<void>{
    const name: string = req.body.name;
    const streamingService: string = req.body.streamingService;
    const genre: string = req.body.genre;

    try{
        const streamingServiceId = await getStreamingServiceIdRepository(streamingService);
        const genreId  = await getGenreIdRepository(genre);

        await moviesInsertionRepository(name, streamingServiceId.id, genreId.id);
        res.sendStatus(201);    
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}