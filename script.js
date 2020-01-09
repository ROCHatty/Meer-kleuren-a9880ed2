var headerr = "";
var bgg = "";
function saveh() {
	headerr = document.querySelector("input").value;
}
function sabevg() {
	bgg = document.querySelector("input").value;
}
function setcolors() {
	document.querySelector("h1").style.color = headerr;
	document.body.style.backgroundColor = bgg;
}