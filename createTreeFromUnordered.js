const asHierarchical = require("./personFormatter");
const { setIntoHierarchy } = require("./createTree");

const mountHierarchy = (hierarchy, dictionary) => {
  if (!(hierarchy.id in dictionary)) return hierarchy;

  hierarchy.children = (hierarchy.children || []).concat(
    dictionary[hierarchy.id]
  );

  hierarchy.children.forEach((element) => {
    mountHierarchy(element, dictionary);
  });

  return hierarchy;
};

const createTreeFromUnordered = (people) => {
  const alreadyHierarchized = [];
  const dictionary = {};

  const hierarchy = people.reduce((tree, person) => {
    if (person.parent === null) {
      alreadyHierarchized.push(person.id);
      // return root
      return asHierarchical(person);
    }

    // Store not hierarchabled person
    if (!alreadyHierarchized.includes(person.parent)) {
      dictionary[person.parent] =
        dictionary[person.parent]?.length > 0
          ? dictionary[person.parent].concat(asHierarchical(person))
          : [asHierarchical(person)];
      return tree;
    }

    // set into hierarchy
    alreadyHierarchized.push(person.id);
    return setIntoHierarchy(tree, person);
  }, {});

  return mountHierarchy(hierarchy, dictionary);
};

module.exports = createTreeFromUnordered;
