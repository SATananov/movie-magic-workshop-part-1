/*
  Warnings:

  - Added the required column `nameInMovie` to the `casts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "casts" ADD COLUMN     "nameInMovie" TEXT NOT NULL;
