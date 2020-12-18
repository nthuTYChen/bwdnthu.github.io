$(document).ready(function () {
	// Use jQuery.get() to retreive the weather information from OpenWeathermap.org. You'll need to replace
	// {AppId} with the ID I share with you in the course website.
	$.get('https://api.openweathermap.org/data/2.5/weather?q=hsinchu,tw&appid={{AppId}}', function(result) {
		// This callback function is executed only when data transmission is complete, and it receives a result object from the 
		// server, so this is an "asynchronic" callback - it waits until some process is done.

		// You can try to print out the result to see how it looks like
		// console.log(result);

		// The temperature of the current weather could be obtained from main.temp of the result object.
		// Do some simple calculation to round to the first decimal.
		// Somehow I could only get the temperature in Kelvin Unit from the server, so the number should minus 273.15
		// to get you Celsius
		var currentTemp = Math.round((result.main.temp - 273.15) * 10) / 10;
		// Put the temperature (plus the unit C) to the first td cell of the tbody row.
		$('td').eq(0).html(currentTemp + 'C');
		// Get the file name of the icon from the result object (check the structure by yourself)
		var icon = result.weather[0].icon;
		// Compose the entire link to the corresponding weather icon.
		var iconURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
		$('td > img').eq(0).attr('src', iconURL); // Change the src attribute of the img element in the second td cell.
		$('h2').css('display', 'none'); // Hide the "Loading" message after everything is set
		$('table').css('display', 'table'); // Show the weather info table
	});

	// The following is the synchronic version of the above code, which does not work, as I will explain below.
	/*
	// Try to obtain weather info from the server and store it into the variable result
	var result = $.get('https://api.openweathermap.org/data/2.5/weather?q=hsinchu,tw&appid={{AppId}}');

	// The follow codes are run "synchronously" - they don't wait until data transmission is over.
	// When these codes are run, the "result" variable could still be "undefined" because data transimission is pending.
	// As a consequence, all the following codes referring to "result" will go wrong.

	var currentTemp = Math.round(result.main.temp * 10) / 10;
	$('td').eq(0).html(currentTemp + 'C');
	var icon = result.weather[0].icon;
	var iconURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
	$('td > img').eq(0).attr('src', iconURL); // Change the src attribute of the img element in the second td cell.
	$('h2').css('display', 'none'); // Hide the "Loading" message after everything is set
	$('table').css('display', 'table'); // Show the weather info table
	*/
});