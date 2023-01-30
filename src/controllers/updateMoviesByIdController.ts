import { Request, Response } from "express";
import { updateMovieByIdRepository } from "../repositories/moviesRepository.js";

export async function updateMoviesByIdController(req: Request, res: Response): Promise<void>{
    const id: number = parseInt(req.params.id);

    try{
        await updateMovieByIdRepository(id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}