# Transforming a list in a hierarchized tree

The problem: We have a list of **people** that need to be **organized** according to a **hierarchy**, forming a tree.

## Solutions

### Solution for ordered lists

`createTree.js`: Applied recursivity for adding person to the corresponding position in the hierarchy.

### Solution for unordered lists

`createTreeFromUnordered.js`: Applied the same recursivity for building the structure from the root. Added a hashmap to store not hierarchable elements, during the loop, so in will be hierarchized in a second process.

## Suggestions for reading this repository

- It is suggested read the different test scenarios for understanding the logic of transformation from the list to the tree.
- Then, go to the algorithms files themself, to take a glance on the solutions. The solution's description above can also give some lights of how it works.
- Can be also interesting to see in the commit history the TDD approach for this exercise.

## Run the tests

You require nodejs and yarn installed in your system.

`yarn test`

## Notes and disclaimers

- Solutions reached using TDD (see commit history)
- No big refactor for improving legibility has been applied (some comments could be replaced with "private" functions, and some function may be moved to independent files)
