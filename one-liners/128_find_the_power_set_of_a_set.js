// the powerSet function generates the power set of given set, which includes all possible
// subsets of the set, including the empty set and the set itself.

const powerSet = (set) => {
  const result = [[]];
  for (const item of set) {
    const subsets = result.map((subset) => [...subset, item]);
    result.push(...subsets);
  }
  return result;
}

console.log(powerSet([1,2,3]));