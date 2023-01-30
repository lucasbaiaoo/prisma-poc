export type GenreEntity = {
    id: number,
    name: string,
}

export type GenreId = Omit<GenreEntity, "name">