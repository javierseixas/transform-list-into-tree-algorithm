const asHierarchical = (person) => {
  return {
    id: person.id,
    name: person.name,
    children: [],
  };
};

const setIntoHierarchy = (hierarchy, person) => {
  if (hierarchy.id == person.parent) {
    hierarchy.children.push(asHierarchical(person));

    return hierarchy;
  }

  hierarchy.children.forEach((element) => {
    setIntoHierarchy(element, person);
  });
  return hierarchy;
};

const createTree = (people) => {
  return people.reduce((tree, person) => {
    if (person.parent === null) {
      return asHierarchical(person);
    }

    return setIntoHierarchy(tree, person);
  }, {});
};

module.exports = createTree;
