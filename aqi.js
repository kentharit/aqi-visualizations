var key = "28b76057-00b8-4fd0-b3a2-8dec32ad5459"
var aqi;
var settings = {
  "url": "https://api.airvisual.com/v2/nearest_city?key="+key,
  "method": "GET",
  "timeout": 0,
};

function loadCurrentAqi() {
	$.ajax(settings).done(function (response) {
	// console.
	aqi = response['data']['current']['pollution']['aqius']
	console.log(response);
	console.log(aqi)
	});
}

function getAqiByCity(city) {
	//code here
}
