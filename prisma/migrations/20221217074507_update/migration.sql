/*
  Warnings:

  - You are about to drop the column `body` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the `blog_category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `blog_category` DROP FOREIGN KEY `blog_category_blogsId_fkey`;

-- AlterTable
ALTER TABLE `blog` DROP COLUMN `body`,
    DROP COLUMN `thumbnail`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `blog_category`;
