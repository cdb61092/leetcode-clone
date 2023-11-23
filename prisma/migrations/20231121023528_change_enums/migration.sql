-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('Easynp', 'Medium', 'Hard');

-- CreateEnum
CREATE TYPE "Pattern" AS ENUM ('SlidingWindow', 'TwoPointers', 'DynamicProgramming', 'BinarySearch', 'BreadthFirstSearch', 'DepthFirstSearch', 'Backtracking', 'DivideAndConquer', 'Greedy', 'BitManipulation', 'TopologicalSort', 'Trie', 'UnionFind', 'Graph');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Problem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "categories" TEXT[],
    "patterns" "Pattern"[],
    "examples" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
