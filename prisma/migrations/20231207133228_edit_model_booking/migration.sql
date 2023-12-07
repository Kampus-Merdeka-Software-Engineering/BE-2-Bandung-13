/*
  Warnings:

  - You are about to drop the column `capacityAdult` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `capacityChild` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `capacityAdult`,
    DROP COLUMN `capacityChild`,
    ADD COLUMN `Adult` INTEGER NULL,
    ADD COLUMN `Child` INTEGER NULL;
