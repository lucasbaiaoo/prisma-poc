import prisma from "../database/db.js"
import { genres, Prisma } from "@prisma/client";

export function getGenreIdRepository(genre:string): Prisma.Prisma__genresClient<genres, never>{
    return prisma.genres.findUnique({
        where: {
            name: genre
        }
    })
}