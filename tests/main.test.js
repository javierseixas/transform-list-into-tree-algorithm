const { expect } = require("@jest/globals");
const createTree = require("../main");

describe("getMostPopularBlog", () => {
  it("one level", () => {
    const input = [
      {
        id: 1,
        name: "CEO",
        parent: null,
      },
    ];
    expected = {
      id: 1,
      name: "CEO",
      children: [],
    };
    expect();
  });
});
