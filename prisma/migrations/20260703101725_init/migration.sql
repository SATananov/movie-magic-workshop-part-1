-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "casts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "born" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "casts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies_casts" (
    "movieId" INTEGER NOT NULL,
    "castId" INTEGER NOT NULL,

    CONSTRAINT "movies_casts_pkey" PRIMARY KEY ("movieId","castId")
);

-- AddForeignKey
ALTER TABLE "movies_casts" ADD CONSTRAINT "movies_casts_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movies_casts" ADD CONSTRAINT "movies_casts_castId_fkey" FOREIGN KEY ("castId") REFERENCES "casts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
