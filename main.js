const createTree = (people) => {
  const pepe = people.reduce((result, person) => {
    if (person.parent === null) {
      return {
        id: person.id,
        name: person.name,
        children: [],
      };
    }

    result.children.push({
      id: person.id,
      name: person.name,
      children: [],
    });
    return result;
  }, {});

  return pepe;
};

module.exports = createTree;
