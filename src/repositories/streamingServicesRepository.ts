import { Prisma, streaming_services } from "@prisma/client";
import prisma from "../database/db.js"


export function getStreamingServiceIdRepository(streamingService:string): Prisma.Prisma__streaming_servicesClient<streaming_services, never>{
    return prisma.streaming_services.findUnique({
        where: {
            name: streamingService
        }
    })
}