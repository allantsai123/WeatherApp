var APPID= "a261d0b5f91d49be3dc6b16ab109b71b";

var temp, pressure, humidity, wind, icon, location, direction;


function updateByCityName(cityname,countrycode){
	var url = "http://api.opentweahtermap.org/data/2.5/weather?"+"q="+cityname+","+countrycode+"&applid="+APPID;
	sendRequest(url);
}
function sendRequest(url){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadstatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status==200){
			var data = JSON.parse(xmlhttp.responseText);
			var weather={};
			weather.icon = data.weather[0].id;
			weather.humidity = data.main.humidity;
			weather.wind = data.wind.speed;
			weather.direction = data.wind.direction;
			weather.loc = data.name;
			weahter.temp = data.main.temp;
			weather.pressure = data.main.pressure;
			update(weather);
		}
	};
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

window.onload = function(){
	temp = document.getElementById("temperature");
	location=document.getElementById("location");
	icon=document.getElementById("icon");
	humidity=document.getElementById("humidity");
	wind=document.getElementById("wind");
	direction=document.getElementById("direction");
	pressure=document.getElementById("pressure");

	updateByCityName("vancouver,ca");
}

function update(weather){
	wind.innerHTML = weather.wind;
	direction.innerHTML = weather.direction;
	humidity.innerHTML = weather.humidity;
	location.innerHTML = weather.location;
	temp.innerHTML = weather.temp;
	icon.src= "img/" + weather.icon + "png";
	pressure.innerHTML = weather.pressure;


}

