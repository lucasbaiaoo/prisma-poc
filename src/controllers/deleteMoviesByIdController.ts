import { Request, Response } from "express";
import { deleteMovieByIdRepository } from "../repositories/moviesRepository.js";

export async function deleteMoviesByIdController(req: Request, res: Response): Promise<void>{
    const id: number = parseInt(req.params.id);

    try{
        await deleteMovieByIdRepository(id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}