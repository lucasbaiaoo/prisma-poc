import { Request, Response } from "express";
import { getMovieByIdRepository } from "../repositories/moviesRepository.js";

export async function getMoviesByIdController(req: Request, res: Response): Promise<void>{
    const id: number = parseInt(req.params.id);
    
    try{
        const movieById = await getMovieByIdRepository(id);

        res.status(200).send(movieById.rows)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}