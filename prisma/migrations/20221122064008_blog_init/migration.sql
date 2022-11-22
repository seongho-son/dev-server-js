/*
  Warnings:

  - Added the required column `subject` to the `blog` table without a default value. This is not possible if the table is not empty.
  - Made the column `createdAt` on table `blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `blog` ADD COLUMN `subject` VARCHAR(191) NOT NULL,
    MODIFY `createdAt` VARCHAR(191) NOT NULL;
