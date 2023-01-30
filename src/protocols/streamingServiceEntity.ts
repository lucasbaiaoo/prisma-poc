export type StreamingServiceEntity = {
    id: number,
    name: string,
}

export type StreamingServiceId = Omit<StreamingServiceEntity, "name">