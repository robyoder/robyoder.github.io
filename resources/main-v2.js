for (const el of document.getElementsByClassName("obfuscate")) {
	const text = atob(el.dataset.t);
	el.textContent = text;

	if (el.classList.contains("type-e")) {
		// This is an email address
		el.setAttribute("href", "mailto:" + text);
	} else if (el.classList.contains("type-t")) {
		// This is a phone number
		el.setAttribute("href", "tel:+1" + text.replace(/\D/g, ""));
	}

	if (el.classList.contains("br")) {
		// Add a line break afterward
		const br = document.createElement("br");
		const next = el.nextSibling;
		if (next) {
			el.parentNode.insertBefore(br, next);
		}
	}
}
