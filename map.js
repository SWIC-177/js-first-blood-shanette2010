// Array of user objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Using map to modify the age property of each user
function updatedUsers(increment) {
  return (user) => user.age + increment;
}

const ageName = users.map(updatedUsers(123));

console.log(ageName);
