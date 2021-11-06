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
console.log(`${name} is ${age} years old and lives in ${city}`)
