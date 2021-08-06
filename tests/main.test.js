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

  it("list with two people, consecutive and ordered levels", () => {
    const input = [
      {
        id: 1,
        name: "CEO",
        parent: null,
      },
      {
        id: 2,
        name: "CMO",
        parent: 1,
      },
    ];
    expected = {
      id: 1,
      name: "CEO",
      children: [
        {
          id: 2,
          name: "CMO",
          children: [],
        },
      ],
    };

    expect(createTree(input)).toEqual(expected);
  });

  it("list with thre people, consecutive and ordered levels", () => {
    const input = [
      {
        id: 1,
        name: "CEO",
        parent: null,
      },
      {
        id: 2,
        name: "CMO",
        parent: 1,
      },
      {
        id: 4,
        name: "Finance Manager 1",
        parent: 2,
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

    expect(createTree(input)).toEqual(expected);
  });
});
