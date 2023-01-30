import { moviesSchema } from "../models/moviesSchema.js";
import { Request, Response, NextFunction } from "express";
import { moviesConflictVerificationRepository } from "../repositories/moviesRepository.js";
import Joi from "joi";

export async function movieMiddleware(req: Request, res: Response, next: NextFunction): Promise<void>{
    const name: string = req.body.name;
    const streamingService: string = req.body.streamingService;
    const genre: string = req.body.genre;

    try{
        const movies = await moviesConflictVerificationRepository();

        for(let i = 0; i < movies.length; i++){
            if(movies[i].name === name && movies[i].streaming_services.name === streamingService && movies[i].genres.name === genre){
                res.sendStatus(409);
                return;
            }
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

    const validation: Joi.ValidationResult = moviesSchema.validate(req.body, {abortEarly: false});

    if(validation.error){
        const errors = validation.error.details.map((detail) => detail.message);
        res.status(422).send(errors);
        return;
    }

    next();
}