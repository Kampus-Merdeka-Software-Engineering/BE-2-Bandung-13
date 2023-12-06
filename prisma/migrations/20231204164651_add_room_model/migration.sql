-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomType` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `capasity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
