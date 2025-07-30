import main8 from "./main8.jpg";

function createhome(){
    const h1 = document.createElement("h1");
    const h1content = document.createTextNode("welcome to the restaurant");

    h1.appendChild(h1content);

    const currenth1 = document.getElementById("content");
    currenth1.appendChild(h1);

    const image = document.createElement("img");
    image.src = main8;
    image.className = 'aa';
    currenth1.appendChild(image);
   
}

export {createhome};