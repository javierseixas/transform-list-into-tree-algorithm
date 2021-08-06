const asHierarchical = (person) => {
  return {
    id: person.id,
    name: person.name,
    children: [],
  };
};

const alreadyHierarchized = [];
const dictionary = {};

const mountHierarchy = (hierarchy) => {
  if (!dictionary[hierarchy.id]) return;
  hierarchy.children = dictionary[hierarchy.id] || [];
  dictionary[hierarchy.id].forEach((element) => {
    mountHierarchy(element);
  });
  return hierarchy;
};

const createTreeFromUnordered = (people) => {
  const hierarchy = people.reduce((tree, person) => {
    if (person.parent === null) {
      alreadyHierarchized.push(person.id);
      return asHierarchical(person);
    }
    if (!alreadyHierarchized.includes(person.parent)) {
      dictionary[person.parent] =
        dictionary[person.parent]?.length > 0
          ? dictionary[person.parent].push(asHierarchical(person))
          : [asHierarchical(person)];
      return tree;
    }
  }, {});

  return mountHierarchy(hierarchy);
};

module.exports = createTreeFromUnordered;
