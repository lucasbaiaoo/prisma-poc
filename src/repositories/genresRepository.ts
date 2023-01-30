import { QueryResult } from "pg";
import connectionDB from "../database/db.js";
import { GenreId } from "../protocols/genreEntity.js";

export function getGenreIdRepository(genre: string): Promise<QueryResult<GenreId>> {
    return connectionDB.query("SELECT id FROM genres WHERE name = $1;", [genre])
}