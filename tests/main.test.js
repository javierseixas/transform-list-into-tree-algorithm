const { expect } = require("@jest/globals");
const createTree = require("../main");

describe("createTree", () => {
  it("list with root person", () => {
    const input = [
      {
        id: 1,
        name: "CEO",
        parent: null,
      },
    ];
    const expected = {
      id: 1,
      name: "CEO",
      children: [],
    };
    expect(createTree(input)).toEqual(expected);
  });
});
