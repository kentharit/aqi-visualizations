var key = "c773d343-be0a-48e7-9011-fe0bec15a266"
var city = "Bangkok";
var country = "Thailand";
var aqi;
var settings = {
  "url": "api.airvisual.com/v2/city?city="+city+"&country="+country+"&key="+key,
  "method": "GET",
  "timeout": 0,
};

function loadCurrentAqi() {
	$.ajax(settings).done(function (response) {
	// console.
	aqi = response['data']['current']['pollution']['aqius'];
	console.log(response);
	console.log(aqi);
	});
}

loadCurrentAqi();
