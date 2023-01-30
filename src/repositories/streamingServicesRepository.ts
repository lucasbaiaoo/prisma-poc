import { QueryResult } from "pg";
import connectionDB from "../database/db.js";
import { StreamingServiceId } from "../protocols/streamingServiceEntity.js";

export function getStreamingIdRepository(streamingService: string): Promise<QueryResult<StreamingServiceId>> {
    return connectionDB.query("SELECT id FROM streaming_services WHERE name = $1;", [streamingService])
}