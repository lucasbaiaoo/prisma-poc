import { QueryResult } from "pg";
import connectionDB from "../database/db.js";
import { MovieEntity } from "../protocols/movieEntity.js";

export function moviesInsertionRepository(name: string, streamingService: string, genre: string): Promise<QueryResult>{
    return connectionDB.query("INSERT INTO movies (name, streaming_service, genre) VALUES ($1, $2, $3);", [name, streamingService, genre]);
}

export function moviesConflictVerificationRepository(): Promise<QueryResult<MovieEntity>>{
    return connectionDB.query("SELECT * FROM movies;")
}

export function getMoviesRepository(): Promise<QueryResult<MovieEntity>>{
    return connectionDB.query("SELECT * FROM movies;")
}

export function getMoviesIdsRepository(): Promise<QueryResult<MovieEntity>>{
    return connectionDB.query("SELECT id FROM movies;")
}

export function getMovieByIdRepository(id: number): Promise<QueryResult<MovieEntity>>{
    return connectionDB.query("SELECT * FROM movies WHERE id = $1;", [id])
}

export function updateMovieByIdRepository(id: number): Promise<QueryResult>{
    return connectionDB.query("UPDATE movies SET already_watched = true WHERE id = $1;", [id])
}

export function deleteMovieByIdRepository(id: number): Promise<QueryResult>{
    return connectionDB.query("DELETE FROM movies WHERE id = $1;", [id])
}