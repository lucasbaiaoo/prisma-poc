export type MovieEntity = {
    name: string,
    already_watched: boolean,
    id: number,
    genres: {
        name: string
    }
    streaming_services: {
        name: string
    }
}

export type MovieId = Omit<MovieEntity, "name" | "already_watched" | "genres" | "streaming_services">