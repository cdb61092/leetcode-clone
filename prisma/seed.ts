import {PrismaClient} from '@prisma/client'

const seed = async () => {
    const prisma = new PrismaClient();

    try {
        await prisma.problem.createMany({
            data: [
                {
                    title: 'Two Sum',
                    difficulty: 'Easy',
                    categories: ['Arrays', 'Hash Table'],
                    patterns: ['TwoPointers'],
                    examples: [
                        {
                            input: "nums = [2,7,11,15], target = 9",
                            output: "[0,1]",
                            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
                        },
                        {
                            input: "nums = [3,2,4], target = 6",
                            output: "[1,2]",
                            explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
                        },
                        {
                            input: "nums = [3,3], target = 6",
                            output: "[0,1]",
                            explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
                        }
                    ]
                },
                {
                    title: 'Valid Parentheses',
                    difficulty: 'Easy',
                    categories: ['Stack'],
                    patterns: [],
                    examples: [
                        {
                            input: 's = "()"',
                            output: "true",
                        },
                        {
                            input: 's = "()[]{}"',
                            output: "true",
                        },
                        {
                            input: 's = "(]"',
                            output: "false",
                        }
                    ]
                },
                {
                    title: 'Merge Two Sorted Lists',
                    difficulty: 'Easy',
                    categories: ['Linked List', 'Recursion'],
                    patterns: [],
                    examples: [
                        {
                            input: 's = "()"',
                            output: "true",
                        },
                        {
                            input: 's = "()[]{}"',
                            output: "true",
                        },
                        {
                            input: 's = "(]"',
                            output: "false",
                        }
                    ]
                }
            ],

        })
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
    }
}

seed()

