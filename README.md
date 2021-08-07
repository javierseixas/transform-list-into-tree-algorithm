# Transforming list of positions to its own hierarchy

The problem: We have an list of **people** that need to be **hierarchized**, forming a tree.

## Solutions

### Solution for ordered lists

`createTree.js`: Applied recursivity for adding person to the corresponding position in the hierarchy.

### Solution for unordered lists

`createTreeFromUnordered.js`: Applied the same recursivity for building the structure from the root. Added a hashmap to store not hierarchable elements, during the loop, so in will be hierarchized in a second process.

## Run

You require node and yarn installed in your system.

`yarn test`

## Notes and disclaimers

- Solutions reached using TDD (see commit history)
- No big refactor for improving legibility has been applied (some comments could be replaced with "private" functions, and some function may be moved to independent files)
