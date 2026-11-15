export function loadHome() {
	const content = document.querySelector("#content");
	content.replaceChildren();
	
	const heading = document.createElement("h1");
	heading.textContent = "The Adventurer's Tavern";

	const paragraph = document.createElement("p");
	paragraph.textContent = "Welcome, weary traveler! Enjoy delicious food, good company, and a little magic.";

	
	content.appendChild(heading);
	content.appendChild(paragraph);
}

