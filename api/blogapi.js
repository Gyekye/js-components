const baseUrl = `https://apis.scrimba.com/jsonplaceholder/`;
let endPoint = `todos/`;
const postElement = document.querySelector(".post");

fetch(`${baseUrl}${endPoint}`,{method:"GET"})
.then(response => response.json())
.then(data =>{

    //** Looping over post items from the api ednpoint*/
    for(let post of data){
        postElement.innerHTML += `<p>${post.title}</p>`
    }
});