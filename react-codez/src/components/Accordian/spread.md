**Spread Operator**
- The spread operator (\`...\`) in JavaScript expands iterable objects like arrays, objects, or strings into individual elements.
- It's commonly used for array literals, function arguments, and object literals.
- It makes copying and merging data easy by spreading elements into new arrays, objects, or function arguments.

*Ex*
```// Example 1: Spreading elements of an array
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Passing array elements as function arguments
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Example 3: Merging objects using spread operator
const obj1 = { name: 'John', age: 30 };
const obj2 = { gender: 'Male', city: 'New York' };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { name: 'John', age: 30, gender: 'Male', city: 'New York' }
