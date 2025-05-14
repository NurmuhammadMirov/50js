// the longestCommonPrefix function finds the longest common prefix amoung an array of strings.
// It starts by assuming the first string in the array as the initial common prefix.

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while(!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(['apple', 'apricot', 'appetizer'])); // 'ap'