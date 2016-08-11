//current date and time for the brower's time zone
(function () {
    function startTime() {
        var today = new Date(),
            date = today.getDate(),
            year = today.getFullYear(),
            month = today.getMonth()+1,
            hour = checkTime(today.getHours()),
            min = checkTime(today.getMinutes()),
            sec = checkTime(today.getSeconds());
        document.getElementById('date').innerHTML = year + "/" + month + "/" + date;
        document.getElementById('time').innerHTML = hour + ":" + min + ":" + sec;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    //add a zero in front of the time is less than 10
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
    startTime();
})();




var APPID = "a261d0b5f91d49be3dc6b16ab109b71b";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;





window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

    var weather={};
    weather.wind=3.5;
    weather.direction="N";
    weather.humidity=35;
    weather.loc="bos";
    weather.temp='45';
    weather.icon=200;

    update(weather);
}
function update(weather) {
    //icon.src = "imgs/codes/" + weather.code + ".png"

    humidity.innerHTML = weather.humidity;
    wind.innerHtml = weather.wind;
    direction.innerHTML = weather.direction;
    loc.innerHTML = weather.location;
    temp.innerHTML = weather.temp;
}

function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
	    var weather = {};
	    weather.code = data.weather[0].id;
	    weather.humidity = data.main.humidity;
	    weather.wind = data.wind.speed;
	    /* NEW */
	    weather.direction = degreesToDirection(data.wind.deg)
	    weather.location = data.name;
	    /* NEW */
	    weather.temp = K2F(data.main.temp);		
	    update(weather);
	}
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();    
}
function C2F(k){
    return Math.round(k*(9/5)-459.67);
}

function F2C(k){
    return Math.round(k - 273.15);
}