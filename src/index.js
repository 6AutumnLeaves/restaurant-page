console.log("Restaurant page is working!");

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";

loadHome();

function showPage(loadFunction) {
    const content = document.querySelector("#content");
    content.replaceChildren();

    loadFunction();
}
const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener("click", () => {
    showPage(loadMenu);
});

const homeButton = document.querySelector("#home-btn");
homeButton.addEventListener("click", () => {
    showPage(loadHome);
});

const contactButton = document.querySelector("#contact-btn");
contactButton.addEventListener("click", () => {
    showPage(loadContact);
});
