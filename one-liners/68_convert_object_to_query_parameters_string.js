// convert a given object to a string of query parameters.
const objectToQueryParams = (obj) => Object.entries(obj).map(([key, value]) => 
`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');

console.log(objectToQueryParams({search: "hello", page: 1})); // 'search=hello&page=1'