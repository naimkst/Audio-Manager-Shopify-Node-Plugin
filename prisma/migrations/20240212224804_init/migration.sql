/*
  Warnings:

  - Added the required column `fileName` to the `Audio` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Audio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Audio" ("createdAt", "id", "mimetype", "name", "size", "status") SELECT "createdAt", "id", "mimetype", "name", "size", "status" FROM "Audio";
DROP TABLE "Audio";
ALTER TABLE "new_Audio" RENAME TO "Audio";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
