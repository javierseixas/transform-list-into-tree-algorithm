const createTree = (people) => {
  return people.reduce((result, person) => {
    return {
      id: person.id,
      name: person.name,
      children: [],
    };
  }, {});
};

module.exports = createTree;
