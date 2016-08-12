var APPID = "a261d0b5f91d49be3dc6b16ab109b71b";

var loc,icon,temp,humidity,wind,direction;
var forecastTemp=[];
var forecastTime=[];
var tempSwap=false;


$(document).ready(function(){

    function cityCurrentWeather(city,country){
        var api = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid="+APPID;
        var forecastS="http://api.openweathermap.org/data/2.5/forecast?q="+city+","+country+"&appid="+APPID;
        $.getJSON(api,function(data){
            //getting data from json
            loc = data.name;
            icon = data.weather[0].id;
            temp = data.main.temp;
            humidity = data.main.humidity;
            wind = data.wind.speed;
            direction = data.wind.deg;
          
            console.log(loc,icon,temp,humidity,wind,direction);

            //display the location 
            $("#location").html(loc);

            //display the weather icon
            $("#icon").attr("src","img/code/"+icon+".png");

            //display and convert the temp with the button
            $("#temperature").html(K2C(temp));

            $("#convert").click(function(){
                if(tempSwap===false){
                    $("#temperature").html(K2F(temp));
                    $("#forecastTemp0").html(K2F(forecastTemp[0]));
                    $("#forecastTemp1").html(K2F(forecastTemp[1]));
                    $("#forecastTemp2").html(K2F(forecastTemp[2]));
                    $("#forecastTemp3").html(K2F(forecastTemp[3]));
                    $("#forecastTemp4").html(K2F(forecastTemp[4]));
                    
                    tempSwap=true;
                    $("#convert").html("Convert to Celcius");
                }else{
                    $("#temperature").html(K2C(temp));
                    $("#forecastTemp0").html(K2C(forecastTemp[0]));
                    $("#forecastTemp1").html(K2C(forecastTemp[1]));
                    $("#forecastTemp2").html(K2C(forecastTemp[2]));
                    $("#forecastTemp3").html(K2C(forecastTemp[3]));
                    $("#forecastTemp4").html(K2C(forecastTemp[4]));
                    tempSwap=false;
                    $("#convert").html("Convert to Fahrenheit");
                    }
            })

            //display humidity
            $("#humidity").html(humidity);
            
            //display wind
            $("#wind").html(wind);
            
            //display wind directions
            $("direction").html(degreeToDirection(direction));

  
        }); 

        $.getJSON(forecastS,function(data){

            for(var i = 0;i<5;i++){
                forecastTemp[i] = data.list[i].main.temp;     
                console.log(forecastTemp);
            }
            //display short forecast temp
            $("#forecastTemp0").html(K2C(forecastTemp[0]));
            $("#forecastTemp1").html(K2C(forecastTemp[1]));
            $("#forecastTemp2").html(K2C(forecastTemp[2]));
            $("#forecastTemp3").html(K2C(forecastTemp[3]));
            $("#forecastTemp4").html(K2C(forecastTemp[4]));
            
        });      
    }


   cityCurrentWeather("Vancouver,ca");

});





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
