$(document).ready(function() {
	var currentDay = dayjs().format('MMMM DD, YYYY');

	$("#currentDay").text(currentDay);

	var hour = dayjs().format('HH00');

	$(".schedule").each(function() {
		console.log($(this).attr("data-hour"), hour);

		if( $(this).attr("data-hour") == hour ) {
			$(this).parent().addClass("present");

		} else if ( $(this).attr("data-hour") < hour ) {
			$(this).parent().addClass("past");
			$(this).attr("disabled", true);

		} else {
			$(this).parent().addClass("future");

		}
	});
});