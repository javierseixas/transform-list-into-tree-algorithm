const { expect } = require("@jest/globals");
const createTreeFromUnordered = require("../createTreeFromUnordered");

describe("createTree", () => {
  it("list with three people, with reversed levels", () => {
    const input = [
      {
        id: 4,
        name: "Finance Manager 1",
        parent: 2,
      },
      {
        id: 2,
        name: "CMO",
        parent: 1,
      },
      {
        id: 1,
        name: "CEO",
        parent: null,
      },
    ];
    expected = {
      id: 1,
      name: "CEO",
      children: [
        {
          id: 2,
          name: "CMO",
          children: [
            {
              id: 4,
              name: "Finance Manager 1",
              children: [],
            },
          ],
        },
      ],
    };

    const result = createTreeFromUnordered(input);

    expect(result).toEqual(expected);
  });
});
