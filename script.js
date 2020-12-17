$(document).ready(function() {
	var date = dayjs().format('YYYYMMMDD');
	var schedule = JSON.parse(localStorage.getItem("planner-schedule")) || [];

	var currentDay = dayjs().format('MMMM DD, YYYY');
	$("#currentDay").text(currentDay);

	var hour = dayjs().format('HH00');

	$(".schedule").each(function() {
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

	$(".saveBtn").click(function() {
		var event = {
			'text': $(this).siblings().children(".schedule").val(),
			'time': $(this).siblings().children(".schedule").attr("data-hour"),
			'date': date
		}

		schedule.push(event);

		localStorage.setItem('planner-schedule', JSON.stringify(schedule));
		
	});

});