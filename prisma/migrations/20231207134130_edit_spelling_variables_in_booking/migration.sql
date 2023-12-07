/*
  Warnings:

  - You are about to drop the column `Adult` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `Child` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `Adult`,
    DROP COLUMN `Child`,
    ADD COLUMN `adult` INTEGER NULL,
    ADD COLUMN `child` INTEGER NULL;
