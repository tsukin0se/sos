import menup from "./menup.jpg";

function createmenu(){
    const h1 = document.createElement("h1");
    const h1content = document.createTextNode("MENU");
    const h2 = document.createElement("h2");
    const h2content = document.createTextNode("salad")

    h1.appendChild(h1content);
    h2.appendChild(h2content);

    const currenth1 = document.getElementById("content");
    currenth1.appendChild(h1);
    currenth1.appendChild(h2);

    const image = document.createElement("img");
    image.src = menup;
    image.className = 'aa';
    currenth1.appendChild(image);
   
}

export {createmenu};