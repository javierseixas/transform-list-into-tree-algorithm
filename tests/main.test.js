const { expect } = require("@jest/globals");
const createTree = require("../main");
const createTreeFromUnordered = require("../createFromUnordered");

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

  it("list according to test wording in interview", () => {
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
        id: 3,
        name: "CTO",
        parent: 1,
      },
      {
        id: 4,
        name: "Finance Manager 1",
        parent: 2,
      },
      {
        id: 5,
        name: "Finance Manager 2",
        parent: 2,
      },
      {
        id: 6,
        name: "Tech Manager 1",
        parent: 3,
      },
      {
        id: 7,
        name: "Tech Manager 2",
        parent: 3,
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
            {
              id: 5,
              name: "Finance Manager 2",
              children: [],
            },
          ],
        },
        {
          id: 3,
          name: "CTO",
          children: [
            {
              id: 6,
              name: "Tech Manager 1",
              children: [],
            },
            {
              id: 7,
              name: "Tech Manager 2",
              children: [],
            },
          ],
        },
      ],
    };

    expect(createTree(input)).toEqual(expected);
  });

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
