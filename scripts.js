const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
	const togglers = collapsible.querySelectorAll(".collapsible__toggler");

	togglers.forEach((toggler) => {
		toggler.addEventListener("click", () => {
			collapsible.classList.toggle("collapsible--expanded");
		});
	});
});
