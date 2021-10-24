let username = document.getElementById("searchInput");
let allNamesDomCollection = document.getElementsByClassName("name");


username.addEventListener("keyup", function(e) {
    let searchQuery = e.target.value.toLowerCase();
    for (let i = 0; i < allNamesDomCollection.length; i++) {
        const currentName = allNamesDomCollection[i].textContent.toLowerCase();


        if (currentName.includes(searchQuery)) {
            allNamesDomCollection[i].style.display = "block";
        } else {
            allNamesDomCollection[i].style.display = "none";
        }
    };
});