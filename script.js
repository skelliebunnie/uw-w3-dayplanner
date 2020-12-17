$(document).ready(function() {
	var currentDay = dayjs().format('MMMM DD, YYYY');

	$("#currentDay").text(currentDay);

	var hour = dayjs().format('HH00');

	$(".schedule").each(function() {
		console.log($(this).attr("data-hour"), hour);

		if( $(this).attr("data-hour") == hour ) {
			$(this).parent().addClass("present");
			$(this).parent().siblings(".hour").addClass("current");

		} else if ( $(this).attr("data-hour") < hour ) {
			$(this).parent().addClass("past");
			$(this).attr("disabled", true);
			$(this).parent().siblings(".saveBtn").addClass("inactive");
			$(this).parent().siblings(".hour").addClass("inactive");

		} else {
			$(this).parent().addClass("future");

		}
	});
});