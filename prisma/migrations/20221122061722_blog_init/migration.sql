/*
  Warnings:

  - You are about to drop the `blogs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `BlogCategory` DROP FOREIGN KEY `BlogCategory_blogsId_fkey`;

-- DropForeignKey
ALTER TABLE `BlogImage` DROP FOREIGN KEY `BlogImage_blogsId_fkey`;

-- DropTable
DROP TABLE `blogs`;

-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(191) NULL,
    `createdAt` VARCHAR(191) NULL,
    `updatedAt` VARCHAR(191) NULL,
    `deletedAt` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BlogCategory` ADD CONSTRAINT `BlogCategory_blogsId_fkey` FOREIGN KEY (`blogsId`) REFERENCES `blog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BlogImage` ADD CONSTRAINT `BlogImage_blogsId_fkey` FOREIGN KEY (`blogsId`) REFERENCES `blog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
