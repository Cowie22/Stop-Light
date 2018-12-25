$(document).ready(function() {

	var $redLight = $('.red-light');
	var $yellowLight = $('.yellow-light');
	var $greenLight = $('.green-light');

	$redLight.on('click', function() {
		$redLight.css('background-color', 'red');
		$yellowLight.css('background-color', 'white');
		$greenLight.css('background-color', 'white');
	});

	$yellowLight.on('click', function() {
		$redLight.css('background-color', 'white');
		$yellowLight.css('background-color', 'yellow');
		$greenLight.css('background-color', 'white');
	});

	$greenLight.on('click', function() {
		$redLight.css('background-color', 'white');
		$yellowLight.css('background-color', 'white');
		$greenLight.css('background-color', 'green');
	});
});