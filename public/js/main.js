$(document).ready(function() {
	getWeather();
});

function searchWeather() {
  var searchQuery = $('.search').val(); 
  getWeather(searchQuery);
}

function getWeather(searchQuery){
	var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&id=4930956&APPID=' + apiKey;
	var params = {
    APPID: apiKey,
    units: 'imperial'
};
	if (searchQuery) {
    params.q = searchQuery;
  } else {
    params.id = 4930956
  }
	$.ajax(url, {
		success: function (data) {
			$('.city').text(data.name);
			$('.temp').text(data.main.temp + ' F');
			$('.humidity').text(data.main.humidity) + ' %";
			$('.wind').text(data.wind.wind.speed) + ' mph';
		}, error: function (error) {
    	$('.error-message').text('An error occurred!');
  }
});


}
