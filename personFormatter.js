const asHierarchical = (person) => {
  return {
    id: person.id,
    name: person.name,
    children: [],
  };
};

module.exports = asHierarchical;
