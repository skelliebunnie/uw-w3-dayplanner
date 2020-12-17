$(document).ready(function() {
	var date = dayjs().format('YYYYMMMDD');
	var schedule = JSON.parse(localStorage.getItem("planner-schedule")) || [];

	var currentDay = dayjs().format('MMMM DD, YYYY');
	$("#currentDay").text(currentDay);

	var hour = dayjs().format('HH00');

	loadEvents();

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

		saveEvent(event);
		
	});

	function saveEvent(event) {
		var foundMatchingEvent = false;
		// loop through everything in the schedule array
		for(var i = 0; i < schedule.length; i++) {
			// if there's already an event for the time being saved,
			// overwrite the previous text instead of saving a new 'entry'
			if( schedule[i].time === event.time ) {
				schedule[i].text = event.text;
				foundMatchingEvent = true;
			}
		}

		// if no matching event was found, just push the entire event to
		// the schedule array
		if(!foundMatchingEvent) {
			schedule.push(event);
		}

		console.log(schedule);

		// save to local storage (last step)
		localStorage.setItem('planner-schedule', JSON.stringify(schedule));
	}

	function loadEvents() {
		// make sure the schedule array actually has something in it
		if( schedule.length > 0 ) {
			// loop through the array
			for(var i = 0; i < schedule.length; i++) {
				// make sure the date matches before entering the text
				if( schedule[i].date === date ) {
					$(`#schedule-${schedule[i].time}`).val(schedule[i].text);

				} else {
					// if the event's date does NOT match *today's date*
					// let's remove it from the schedule
					schedule.splice(i, 1);

				}
			}
		}
	}

});