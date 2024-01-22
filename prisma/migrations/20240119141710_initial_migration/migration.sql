-- CreateTable
CREATE TABLE "_users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "_posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "_users_email_key" ON "_users"("email");

-- AddForeignKey
ALTER TABLE "_posts" ADD CONSTRAINT "_posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
