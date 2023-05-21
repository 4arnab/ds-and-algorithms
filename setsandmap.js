/**
 * unique so we can't store duplicate elements,
 * builtin function such as (add,delete,has to check for element)
 * sets are match faster then arrays
 */
const set = new Set([1, 3, 4]);

set.add(4); // O(1)
set.delete(2);

console.log(set.has(2)); // O(N)
console.log(set.size, "size"); // O(1)
// to delete all the elements from the set use set.clear() function

for (const item of set) {
  console.log(item);
}

/**
 * OBJECTS ARE UNORDERED BUT MAPS NOT
 * MAPS ARE ONLY FOR STORING DATA, WE CAN'T ADD METHODS LINE OBJECTS
 */

const map = new Map([
  ["firstName", "AHMED"],
  ["lastName", "Abdifatah"],
]);

console.log(map.size, "SIZE OF THE MAP");
map.set("third name", "this is the third name");
// map.forEach((item) => {
//   console.log(item);
// });
// map.delete("firstName"); deleting item
// console.log(map);
