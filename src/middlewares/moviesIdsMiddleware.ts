import { Request, Response, NextFunction } from "express";
import { getMoviesIdsRepository } from "../repositories/moviesRepository.js";

export async function moviesIdsMiddleware(req: Request, res: Response, next: NextFunction): Promise<void>{
    const id: number = parseInt(req.params.id);

    try{
        const moviesIds = await getMoviesIdsRepository();
        let arrayMoviesIds: number[] = [];

        for(let i = 0; i < moviesIds.length; i++){
            arrayMoviesIds.push(moviesIds[i].id)
        }

        if(arrayMoviesIds.includes(id) === false){
            res.status(404).send([]);
            return;
        }

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

    next();
}