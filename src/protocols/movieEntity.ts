export type MovieEntity = {
    id: number,
    name: string,
    streaming_service: string,
    genre: string,
    already_watched: boolean
}

export type MovieId = Omit<MovieEntity, "name" | "streaming_service" | "genre" | "already_watched">