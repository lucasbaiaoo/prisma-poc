import prisma from "../database/db.js"
import { movies, Prisma, PrismaPromise } from "@prisma/client";
import { MovieEntity, MovieId } from "../protocols/movieEntity.js";

export function moviesInsertionRepository(name: string, streamingServiceId: number, genreId: number): Prisma.Prisma__moviesClient<movies, never>{
    return prisma.movies.create({
        data:{
            name: name,
            streaming_service_id: streamingServiceId,
            genre_id: genreId
        }
    })
}

export function moviesConflictVerificationRepository(): PrismaPromise<MovieEntity[]>{
    return prisma.movies.findMany({
        select:{
            id: true,
            name: true,
            streaming_services: {
                select:{
                    name: true,
                }
            },
            genres: {
                select:{
                    name: true,
                }
            },
            already_watched: true
        }
    })
}

export function getMoviesRepository(): PrismaPromise<MovieEntity[]>{
    return prisma.movies.findMany({
        select:{
            id: true,
            name: true,
            streaming_services: {
                select:{
                    name: true,
                }
            },
            genres: {
                select:{
                    name: true,
                }
            },
            already_watched: true
        }
    })
}

export function getMoviesIdsRepository(): PrismaPromise<MovieId[]>{
    return prisma.movies.findMany({
        select:{
            id: true
        }
    })
}

export function getMovieByIdRepository(id: number): PrismaPromise<MovieEntity[]>{
    return prisma.movies.findMany({
        where:{
            id: id
        },
        select:{
            id: true,
            name: true,
            streaming_services: {
                select:{
                    name: true,
                }
            },
            genres: {
                select:{
                    name: true,
                }
            },
            already_watched: true
        }
    })
}

export function updateMovieByIdRepository(id: number): Prisma.Prisma__moviesClient<movies, never>{
    return prisma.movies.update({
        where: {
            id: id
        },
        data:{
            already_watched: true
        }
    })
}


export function deleteMovieByIdRepository(id: number): Prisma.Prisma__moviesClient<movies, never>{
    return prisma.movies.delete({
        where: {
            id: id
        }
    })
}