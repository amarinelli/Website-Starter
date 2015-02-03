$( document ).ready(function() {
  console.log("ready!");
  $("#mainContent").load("pages/home.html");
});

//Home nav link
$("#nav1").click(function() {
  $("#mainContent").load("pages/home.html");
});

//SNC2D nav link
$("#nav2").click(function() {
  $("#mainContent").load("pages/snc2d.html");
});

//Textbooks nav link
$("#nav3").click(function() {
  $("#mainContent").load("pages/textbooks.html");
});

//Links nav link
$("#nav4").click(function() {
  $("#mainContent").load("pages/links.html");
});
