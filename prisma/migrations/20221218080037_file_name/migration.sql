/*
  Warnings:

  - You are about to drop the column `content` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `blog` table. All the data in the column will be lost.
  - Added the required column `text` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blog` DROP COLUMN `content`,
    DROP COLUMN `name`,
    DROP COLUMN `subject`,
    ADD COLUMN `text` TEXT NOT NULL;
