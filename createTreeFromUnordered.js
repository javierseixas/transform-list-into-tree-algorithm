const asHierarchical = require("./personFormatter");

const mountHierarchy = (hierarchy, dictionary) => {
  if (!dictionary[hierarchy.id]) return hierarchy;
  hierarchy.children = dictionary[hierarchy.id] || [];
  dictionary[hierarchy.id].forEach((element) => {
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
      return asHierarchical(person);
    }
    if (!alreadyHierarchized.includes(person.parent)) {
      dictionary[person.parent] =
        dictionary[person.parent]?.length > 0
          ? dictionary[person.parent].concat(asHierarchical(person))
          : [asHierarchical(person)];
      return tree;
    }
  }, {});

  return mountHierarchy(hierarchy, dictionary);
};

module.exports = createTreeFromUnordered;
