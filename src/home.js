export function loadHome() {
	const content = document.querySelector("#content");
	
	const homeContainer = document.createElement("div");

	const heading = document.createElement("h1");
	heading.textContent = "The Adventurer's Tavern";

	const paragraph = document.createElement("p");
	paragraph.textContent = "Welcome, weary traveler! Enjoy delicious food, good company, and a little magic.";

	
	homeContainer.appendChild(heading);
	homeContainer.appendChild(paragraph);
	content.appendChild(homeContainer);
}

