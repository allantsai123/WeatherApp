var APPID = "a261d0b5f91d49be3dc6b16ab109b71b";


var cities=["Vancouver,ca","Victoria,ca","Kelowna,ca"];

var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
$(function(){
    $('')


});
// var forecastTime=[];
// var forecastTemp=[];
// function updateForeCastByCity(city,country){
//     var forecast = "http://api.openweathermap.org/data/2.5/forecast?q="+ city+","+country+"&appid="+APPID;
//     sendRequestforecast(url);
// }
// function sendRequestforeCast(url){
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
//             var data = JSON.parse(xmlhttp.responseText);
//             var forecast = {};
//             for(var i =0;i<5;i++){
//                 forecast.forecastTemp[i] = K2C(data.list[i].main.temp);
//                 forecast.forecastTime[i] = data.list[i].dt_txt;
//             }
//             updateForecast(forecast);
//         }
//     };
//     xmlhttp.open("GET",url,true);
//     xmlhttp.send();

// }
// function updateForecast(forecast){

//     for(var i = 0;i<5;i++){

//     }
    // wind.innerHTML = weather.wind;
    // direction.innerHTML = weather.direction;
    // humidity.innerHTML = weather.humidity;
    // loc.innerHTML = weather.loc;
    // temp.innerHTML = weather.temp;
    // icon.src = "img/code/" + weather.icon + ".png";
// }


//Current weather in given city
function updateByCity(city,country){
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city+","+country+"&appid="+APPID;
    sendRequest(url);
}
function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.icon = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.direction = degreeToDirection(data.wind.deg);
            weather.loc = data.name;
            weather.temp = K2C(data.main.temp);
            update(weather);
        }
    };
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
function update(weather){
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
    icon.src = "img/code/" + weather.icon + ".png";
}
window.onload = function(){
    temp = document.getElementById("temperature");
    loc = document.getElementById("location0");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

    updateByCity(cities[0]);
}

//temperature conversion
function K2F(k){
    return Math.round(k*(9/5)-459.67);
}
function K2C(k){
    return Math.round(k - 273.15);
}

//degree to direction
function degreeToDirection(degree){
    var range = 360/16;
    var low = 360 - range/2;
    var high = (low+range ) % 360;
    var angles = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    for (i in angles){
        if(degree>=low && degree<high){
            return angles[i];
        }
        low = (low + range)%360;
        high = (high+range)%360;
    }
    return "N";
}
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
