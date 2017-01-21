$(document).foundation();

$("#link1, #link2, #link3, #close-btn").hide();

$("#menu").on("click", function() {
	$("#link1, #link2, #link3, #close-btn").toggle();
	$("#menu").toggle();
});

$("#close-btn").on("click", function() {
	$("#link1, #link2, #link3, #close-btn").toggle();
	$("#menu").toggle();
});
