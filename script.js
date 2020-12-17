$(document).ready(function() {
	var currentDay = dayjs().format('MMMM DD, YYYY');

	$("#currentDay").text(currentDay);
});