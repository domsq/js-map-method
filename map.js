  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);

// Using map()

const multByTwo = function(num) {
  return num * 2;
}

// function multByTwo(num) {
//   return num * 2;
// }

// const multByTwo = (num) => num * 2;

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simple = nums.map(function(num) { return num * 2});
console.log(simple);

// Simplfied w/ map() + arrow function
const simple2 = nums.map(num => num * 2);
console.log(simple2)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);

// function logNameId(arr) {
//   results = []

//   for (let student of arr) {
//     results.push([student.name, student.id]);
//   }
//   return results;
// }

console.log(studentsWithIds);