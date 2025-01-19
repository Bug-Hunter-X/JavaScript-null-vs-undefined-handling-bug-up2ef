function foo(a) {
  if (a === null || a === undefined) {
    return 0;
  } else if (typeof a === 'object' && a !== null) {
    return a.length;
  } else {
    return undefined; // Or handle other cases appropriately
  }
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Output: 0
console.log(foo({})); // Output: undefined
console.log(foo(5)); // Output: undefined