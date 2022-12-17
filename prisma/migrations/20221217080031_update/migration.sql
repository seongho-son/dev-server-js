/*
  Warnings:

  - You are about to drop the `blog_image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `blog_image` DROP FOREIGN KEY `blog_image_blogsId_fkey`;

-- DropTable
DROP TABLE `blog_image`;
