import joi from "joi";

export const moviesSchema: joi.ObjectSchema = joi.object({
    name:joi.string().trim().required(),
    streamingService:joi.string().trim().required(),
    genre:joi.string().trim().required()
})