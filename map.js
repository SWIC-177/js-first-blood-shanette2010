// Array of user objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Using map to modify the age property of each user
const updatedUsers = users.map((user) => {
  return { ...user, age: user.age + 1 };
});
