const { expect } = require("@jest/globals");
const createTreeFromUnordered = require("../createTreeFromUnordered");

describe("createTree", () => {
  it("list with three people, with reversed levels", () => {
    const input = [
      {
        id: 40,
        name: "Finance Manager 1",
        parent: 20,
      },
      {
        id: 20,
        name: "CMO",
        parent: 10,
      },
      {
        id: 10,
        name: "CEO",
        parent: null,
      },
    ];
    const expected = {
      id: 10,
      name: "CEO",
      children: [
        {
          id: 20,
          name: "CMO",
          children: [
            {
              id: 40,
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

  it("list with three people, with reversed levelssssss", () => {
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
      {
        id: 76,
        name: "Finance Manager 2",
        parent: 2,
      },
    ];
    const expected = {
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
            {
              id: 76,
              name: "Finance Manager 2",
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
