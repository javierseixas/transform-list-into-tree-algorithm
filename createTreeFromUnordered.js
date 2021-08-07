const asHierarchical = require("./personFormatter");
const { setIntoHierarchy } = require("./createTree");

const mountHierarchy = (hierarchy, hashmap) => {
  if (!(hierarchy.id in hashmap)) return hierarchy;

  hierarchy.children = (hierarchy.children || []).concat(hashmap[hierarchy.id]);

  hierarchy.children.forEach((person) => {
    mountHierarchy(person, hashmap);
  });

  return hierarchy;
};

const createTreeFromUnordered = (people) => {
  const hierarchizedIds = [];
  const hashmap = {};

  const hierarchy = people.reduce((hierarchy, person) => {
    // organize root in the hierarchy
    if (person.parent === null) {
      hierarchizedIds.push(person.id);
      return asHierarchical(person);
    }

    // Store not hierarchabled person
    if (!hierarchizedIds.includes(person.parent)) {
      hashmap[person.parent] =
        hashmap[person.parent]?.length > 0
          ? hashmap[person.parent].concat(asHierarchical(person))
          : [asHierarchical(person)];
      return hierarchy;
    }

    // set into hierarchy
    hierarchizedIds.push(person.id);
    return setIntoHierarchy(hierarchy, person);
  }, {});

  return mountHierarchy(hierarchy, hashmap);
};

module.exports = createTreeFromUnordered;
