
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number){
    return function(plusNumber){
    return number + plusNumber

    }
}
const plus15 = plus(15)
console.log(plus15(10))


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
    
  ]; 
  
 users.forEach(users => {
    console.log(users.name)
 })


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let newArray = users.map((users) => {
    return {name: users.name, score: users.score}
})

console.log(newArray)


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let activeUsers = users.filter((users) => {
    if(users.isActive === true){
        console.log(users.name)
    }
})
//let activeUsers = users.filter((users) => user.isActive)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

users.sort((a,b) => b.score-a.score)
console.log(users)

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");


let average = users.reduce((sum, users) => sum + users.score, 0) / users.length;

console.log(average)




