// 1. Create an object named people that contains an empty array called friends
const people = {
  friends: []
};

// 2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value
const friend1 = {
  firstName: "John",
  lastName: "Doe",
  id: 1
};

const friend2 = {
  firstName: "Jane",
  lastName: "Smith",
  id: 2
};

const friend3 = {
  firstName: "Bob",
  lastName: "Johnson",
  id: 3
};

// 3. Add the three friends to the friend array
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

// 4. Output it to the console
console.log(people);
