document.getElementsByTagName('button')[0].addEventListener("click", () => {
	document.getElementsByTagName('span')[0].textContent = parseInt(document.getElementsByTagName('span')[0].textContent) + 1;
});
