function displayContent(event) {
  console.log(event.target.id);

  switch(event.target.id) {
    case "homeMenu":
      $("div.mainContent > div").css("display", "none");
      $("#homeContent").css("display", "");
      break;
    case "calendarMenu":
      $("div.mainContent > div").css("display", "none");
      $("#calendarContent").css("display", "");
      initializeCalendar();
      break;
    case "textbooksMenu":
      $("div.mainContent > div").css("display", "none");
      $("#textbooksContent").css("display", "");
      break;
    case "linksMenu":
      $("div.mainContent > div").css("display", "none");
      $("#linksContent").css("display", "");
      break;
  }
}

function initializeCalendar() {
  $('#calendarContent').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      defaultDate: '2014-09-12',
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: 'https://www.google.com/calendar/feeds/en.canadian%23holiday%40group.v.calendar.google.com/public/basic',
  });
}

$(document).ready(function() {
  console.log("ready");

  $("div.mainContent > div").css("display", "none");
  $("#homeContent").css("display", "");

  //event listeners
  $("#homeMenu").on("click", displayContent);
  $("#calendarMenu").on("click", displayContent);
  $("#textbooksMenu").on("click", displayContent);
  $("#linksMenu").on("click", displayContent);

});
