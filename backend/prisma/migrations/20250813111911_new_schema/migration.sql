/*
  Warnings:

  - You are about to drop the column `direccion` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `edad` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fechaRegistro` on the `User` table. All the data in the column will be lost.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `direccion`,
    DROP COLUMN `edad`,
    DROP COLUMN `estado`,
    DROP COLUMN `fechaRegistro`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `registrationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `state` VARCHAR(191) NOT NULL DEFAULT 'activo';
