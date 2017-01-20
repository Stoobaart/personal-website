$(document).foundation();

$("#link1, #link2, #link3, #link4").hide();

$("#menu").on("click", function() {
	$("#link1, #link2, #link3, #link4").toggle();
	$("#menu").toggle();
});