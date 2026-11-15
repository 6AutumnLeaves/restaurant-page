export function loadMenu() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const menuContainer = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const paragraph = document.createElement("p");
    paragraph.textContent = "The roasted garlic chicken with a hearty slice of rosemary butter bread and rice is a dish of its own class!";


    menuContainer.appendChild(heading);
    menuContainer.appendChild(paragraph);
    content.appendChild(menuContainer);

}