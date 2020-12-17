$(document).ready(function() {
	var currentDay = dayjs().format('MMMM DD, YYYY');

	$("#currentDay").text(currentDay);

	var hour = dayjs().format('HH00');
	console.log(hour);
});