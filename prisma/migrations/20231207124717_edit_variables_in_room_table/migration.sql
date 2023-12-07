/*
  Warnings:

  - You are about to drop the column `capasity` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Room` DROP COLUMN `capasity`,
    ADD COLUMN `capacityAdult` INTEGER NULL,
    ADD COLUMN `capacityChild` INTEGER NULL;
