-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "streaming_service_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "already_watched" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "streaming_services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "streaming_services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "streaming_services_name_key" ON "streaming_services"("name");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_streaming_service_id_fkey" FOREIGN KEY ("streaming_service_id") REFERENCES "streaming_services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
