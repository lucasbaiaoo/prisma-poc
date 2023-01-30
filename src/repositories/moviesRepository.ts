import { QueryResult } from "pg";
import connectionDB from "../database/db.js";
import { MovieEntity, MovieId } from "../protocols/movieEntity.js";

export function moviesInsertionRepository(name: string, streamingServiceId: number, genreId: number): Promise<QueryResult>{
    return connectionDB.query("INSERT INTO movies (name, streaming_service_id, genre_id) VALUES ($1, $2, $3);", [name, streamingServiceId, genreId]);
}

export function moviesConflictVerificationRepository(): Promise<QueryResult<MovieEntity>>{
    return connectionDB.query("SELECT movies.id, movies.name, streaming_services.name AS streaming_service, genres.name AS genre, already_watched FROM movies JOIN streaming_services ON streaming_service_id = streaming_services.id JOIN genres ON genre_id = genres.id;")
}

export function getMoviesRepository(): Promise<QueryResult<MovieEntity>>{
    return connectionDB.query("SELECT movies.id, movies.name, streaming_services.name AS streaming_service, genres.name AS genre, already_watched FROM movies JOIN streaming_services ON streaming_service_id = streaming_services.id JOIN genres ON genre_id = genres.id;")
}

export function getMoviesIdsRepository(): Promise<QueryResult<MovieId>>{
    return connectionDB.query("SELECT id FROM movies;")
}

export function getMovieByIdRepository(id: number): Promise<QueryResult<MovieEntity>>{
    return connectionDB.query("SELECT movies.id, movies.name, streaming_services.name AS streaming_service, genres.name AS genre, already_watched FROM movies JOIN streaming_services ON streaming_service_id = streaming_services.id JOIN genres ON genre_id = genres.id WHERE movies.id = $1;", [id])
}

export function updateMovieByIdRepository(id: number): Promise<QueryResult>{
    return connectionDB.query("UPDATE movies SET already_watched = true WHERE id = $1;", [id])
}

export function deleteMovieByIdRepository(id: number): Promise<QueryResult>{
    return connectionDB.query("DELETE FROM movies WHERE id = $1;", [id])
}