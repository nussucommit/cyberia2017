$(document).ready(function() {
	// Grab the current date
	var currentDate = new Date();

	// Set the date of start
	var futureDate  = new Date(2017, 11, 13);

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	diff = diff > 0 ? diff : 0;

	// Instantiate a coutdown FlipClock
	var clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
	});
});