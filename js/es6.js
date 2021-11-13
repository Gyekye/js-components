//** Template Literals */
const myFirstName = "Richmond";
const myLastName  = "Pinamang";
let fullName = `${myFirstName} ${myLastName}`;
document.querySelector("#fullname").textContent = fullName;


//** Object Destructuring */

const player = {
    name:"Richmond",
    age: 20,
    favQuo:"job 31:1",
    address:{
        city:"abeka lapaz",
    },
}
const {name,age,favQuo,address:{city}} = player;
console.log(`${name} is ${age} years old and lives in ${city}`);


//** Destructuring Arrays */

 const [ richmond,john]  = ["richmond opoku", "John Way"];
console.log(richmond, john);


//** for of loop */
const ages = [12,132,4,55,6,77,8,8,8,98];

for(const age of ages){
    document.querySelector("#fullname").textContent += `${age}   `;
}

//** Arrow functions */

//? Arrow functions with @Default Params.
const greetFunction = (user="user") => `Hello, ${user}`;
console.log(greetFunction());
console.log(greetFunction("Richmond"));