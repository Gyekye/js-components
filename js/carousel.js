const getBodyTag = document.getElementsByTagName("Body");
for(let i=0;i<getBodyTag.length;i++){
    getBodyTag[i].textContent = "js working";
}