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
                    ],
                    starterCode: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   // write code here
}; `,
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
                    ],
                    starterCode: `/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // write code here
};`
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
                    ],
                    starterCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
      // write code here
};`,
                }
            ]

        })
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
    }
}

seed()

