-- CreateTable
CREATE TABLE `Reservations` (
    `id_reservations` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `room_number` INTEGER NOT NULL,
    `check_in` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `check_out` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `adults` INTEGER NOT NULL,
    `children` INTEGER NOT NULL,
    `room` INTEGER NOT NULL,
    `room_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_reservations`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id_room` INTEGER NOT NULL AUTO_INCREMENT,
    `room_number` INTEGER NOT NULL,
    `room_type` VARCHAR(191) NOT NULL,
    `number_of_guests` INTEGER NOT NULL,
    `harga` DECIMAL(65, 30) NOT NULL,
    `room_desc` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Room_room_number_key`(`room_number`),
    PRIMARY KEY (`id_room`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
