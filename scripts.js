const collapsibleElements = document.querySelectorAll(".collapsible");

collapsibleElements.forEach((collapsible) => {
	collapsible.addEventListener("click", () => {
		collapsible.classList.toggle("collapsible--expanded");
	});
});
