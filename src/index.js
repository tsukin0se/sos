import _ from 'lodash';
import './style.css';
import {createhome} from "./home.js";
import {createmenu} from "./menu.js";
import {createabout} from "./about.js";

document.getElementById("home").addEventListener("click", renderhome);
document.getElementById("menu").addEventListener("click", rendermenu);
document.getElementById("about").addEventListener("click", renderabout);

function clear() {
  const div = document.getElementById('content');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function renderhome(){
   clear();
   createhome();
}

function rendermenu(){
   clear();
   createmenu();
}

function renderabout(){
   clear();
   createabout();
}
