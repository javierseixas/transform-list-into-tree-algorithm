const asHierarchical = require("./personFormatter");

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
  return people.reduce((hierarchy, person) => {
    if (person.parent === null) {
      return asHierarchical(person);
    }

    return setIntoHierarchy(hierarchy, person);
  }, {});
};

module.exports = { createTree, setIntoHierarchy };
