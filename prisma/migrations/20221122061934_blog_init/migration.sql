/*
  Warnings:

  - You are about to drop the `BlogCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BlogImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `BlogCategory` DROP FOREIGN KEY `BlogCategory_blogsId_fkey`;

-- DropForeignKey
ALTER TABLE `BlogImage` DROP FOREIGN KEY `BlogImage_blogsId_fkey`;

-- DropTable
DROP TABLE `BlogCategory`;

-- DropTable
DROP TABLE `BlogImage`;

-- CreateTable
CREATE TABLE `blog_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `blogsId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `blogsId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog_category` ADD CONSTRAINT `blog_category_blogsId_fkey` FOREIGN KEY (`blogsId`) REFERENCES `blog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog_image` ADD CONSTRAINT `blog_image_blogsId_fkey` FOREIGN KEY (`blogsId`) REFERENCES `blog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
