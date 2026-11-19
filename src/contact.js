export function loadContact() {
    const content = document.querySelector("#content");

    const contactContainer = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Contact the Adventurer's Tavern";

    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Come visit us!";
    
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "123 Dragon's Crossing, Eldoria";
    
    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "Send a raven or call (555) 123-4567";
    
  
    contactContainer.appendChild(heading);
    contactContainer.appendChild(paragraph1);
    contactContainer.appendChild(paragraph2);
    contactContainer.appendChild(paragraph3);

    content.appendChild(contactContainer);
}