/*
  Warnings:

  - You are about to drop the column `path` on the `Audio` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Audio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Audio" ("createdAt", "id", "name", "size", "status") SELECT "createdAt", "id", "name", "size", "status" FROM "Audio";
DROP TABLE "Audio";
ALTER TABLE "new_Audio" RENAME TO "Audio";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
