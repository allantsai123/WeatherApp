var APPID = "a261d0b5f91d49be3dc6b16ab109b71b";

$(document).ready(function(){

    firstCity("Vancouver","ca");
    secondCity("Victoria,ca");
    thirdCity("kelowna,ca");

    function firstCity(city,country){
        var api = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid="+APPID;
        var forecastS="http://api.openweathermap.org/data/2.5/forecast?q="+city+","+country+"&appid="+APPID;
        $.getJSON(api,function(data){
            locVan = data.name;
            iconVan = data.weather[0].id;
            tempVan = data.main.temp;
            humidityVan = data.main.humidity;
            windVan = data.wind.speed;
            directionVan = data.wind.deg;
            console.log(locVan,iconVan,tempVan,humidityVan,windVan,directionVan);
            $("#locationVan").html(locVan);
            $("#iconVan").attr("src","img/code/"+iconVan+".png");
            $("#humidityVan").html(humidityVan);
            $("#windVan").html(windVan);
            $("#directionVan").html(degreeToDirection(directionVan));

            $("#temperatureVan").html(K2C(tempVan));
            $("#convertF").click(function(){
                $("#temperatureVan").html(K2F(tempVan));
                $("#forecastTemp0Van").html(K2F(forecastTempVan[0]));
                $("#forecastTemp1Van").html(K2F(forecastTempVan[1]));
                $("#forecastTemp2Van").html(K2F(forecastTempVan[2]));
                $("#forecastTemp3Van").html(K2F(forecastTempVan[3]));
                $("#forecastTemp4Van").html(K2F(forecastTempVan[4])); 
                $("#forecastTemp5Van").html(K2F(forecastTempVan[5]));
                $("#forecastTemp6Van").html(K2F(forecastTempVan[6]));
                $("#forecastTemp7Van").html(K2F(forecastTempVan[7]));
            }); 
            $("#convertC").click(function(){
                $("#temperatureVan").html(K2C(tempVan));
                $("#forecastTemp0Van").html(K2C(forecastTempVan[0]));
                $("#forecastTemp1Van").html(K2C(forecastTempVan[1]));
                $("#forecastTemp2Van").html(K2C(forecastTempVan[2]));
                $("#forecastTemp3Van").html(K2C(forecastTempVan[3]));
                $("#forecastTemp4Van").html(K2C(forecastTempVan[4]));
                $("#forecastTemp5Van").html(K2C(forecastTempVan[5]));
                $("#forecastTemp6Van").html(K2C(forecastTempVan[6]));
                $("#forecastTemp7Van").html(K2C(forecastTempVan[7]));
            });  

        }); 
        $.getJSON(forecastS,function(data){
            for(var i = 0;i<8;i++){
                forecastTempVan[i] = data.list[i].main.temp; // + data.city.name;     
            }
            console.log(forecastTempVan);
            $("#forecastTemp0Van").html(K2C(forecastTempVan[0]));
            $("#forecastTemp1Van").html(K2C(forecastTempVan[1]));
            $("#forecastTemp2Van").html(K2C(forecastTempVan[2]));
            $("#forecastTemp3Van").html(K2C(forecastTempVan[3]));
            $("#forecastTemp4Van").html(K2C(forecastTempVan[4]));
            $("#forecastTemp5Van").html(K2C(forecastTempVan[5]));
            $("#forecastTemp6Van").html(K2C(forecastTempVan[6]));
            $("#forecastTemp7Van").html(K2C(forecastTempVan[7])); 

     
        });  
    }
    function secondCity(city,country){
        var api = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid="+APPID;
        var forecastS="http://api.openweathermap.org/data/2.5/forecast?q="+city+","+country+"&appid="+APPID;
        $.getJSON(api,function(data){
            locVic = data.name;
            iconVic = data.weather[0].id;
            tempVic = data.main.temp;
            humidityVic = data.main.humidity;
            windVic = data.wind.speed;
            directionVic = data.wind.deg;
            console.log(locVic,iconVic,tempVic,humidityVic,windVic,directionVic);
            $("#locationVic").html(locVic);
            $("#iconVic").attr("src","img/code/"+iconVic+".png");
            $("#humidityVic").html(humidityVic);
            $("#windVic").html(windVic);
            $("#directionVic").html(degreeToDirection(directionVic));
            $("#temperatureVic").html(K2C(tempVic));
            $("#convertF").click(function(){
                $("#temperatureVic").html(K2F(tempVic));
                $("#forecastTemp0Vic").html(K2F(forecastTempVic[0]));
                $("#forecastTemp1Vic").html(K2F(forecastTempVic[1]));
                $("#forecastTemp2Vic").html(K2F(forecastTempVic[2]));
                $("#forecastTemp3Vic").html(K2F(forecastTempVic[3]));
                $("#forecastTemp4Vic").html(K2F(forecastTempVic[4])); 
                $("#forecastTemp5Vic").html(K2F(forecastTempVic[5]));
                $("#forecastTemp6Vic").html(K2F(forecastTempVic[6]));
                $("#forecastTemp7Vic").html(K2F(forecastTempVic[7]));
            }); 
            $("#convertC").click(function(){
                $("#temperatureVic").html(K2C(tempVic));
                $("#forecastTemp0Vic").html(K2C(forecastTempVic[0]));
                $("#forecastTemp1Vic").html(K2C(forecastTempVic[1]));
                $("#forecastTemp2Vic").html(K2C(forecastTempVic[2]));
                $("#forecastTemp3Vic").html(K2C(forecastTempVic[3]));
                $("#forecastTemp4Vic").html(K2C(forecastTempVic[4]));
                $("#forecastTemp5Vic").html(K2C(forecastTempVic[5]));
                $("#forecastTemp6Vic").html(K2C(forecastTempVic[6]));
                $("#forecastTemp7Vic").html(K2C(forecastTempVic[7]));
            });
        }); 
        $.getJSON(forecastS,function(data){
            for(var i = 0;i<8;i++){
                forecastTempVic[i] = data.list[i].main.temp;     
            }
            console.log(forecastTempVic);
            $("#forecastTemp0Vic").html(K2C(forecastTempVic[0]));
            $("#forecastTemp1Vic").html(K2C(forecastTempVic[1]));
            $("#forecastTemp2Vic").html(K2C(forecastTempVic[2]));
            $("#forecastTemp3Vic").html(K2C(forecastTempVic[3]));
            $("#forecastTemp4Vic").html(K2C(forecastTempVic[4]));
            $("#forecastTemp5Vic").html(K2C(forecastTempVic[5]));
            $("#forecastTemp6Vic").html(K2C(forecastTempVic[6]));
            $("#forecastTemp7Vic").html(K2C(forecastTempVic[7]));  
        }); 

    }

    function thirdCity(city,country){
        var api = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid="+APPID;
        var forecastS="http://api.openweathermap.org/data/2.5/forecast?q="+city+","+country+"&appid="+APPID;
        $.getJSON(api,function(data){
            locKel = data.name;
            iconKel = data.weather[0].id;
            tempKel = data.main.temp;
            humidityKel = data.main.humidity;
            windKel = data.wind.speed;
            directionKel = data.wind.deg;
            console.log(locKel,iconKel,tempKel,humidityKel,windKel,directionKel);
            $("#locationKel").html(locKel);
            $("#iconKel").attr("src","img/code/"+iconKel+".png");
            $("#humidityKel").html(humidityKel);
            $("#windKel").html(windKel);
            $("#directionKel").html(degreeToDirection(directionKel));
             
            $("#temperatureKel").html(K2C(tempKel));
                $("#convertF").click(function(){
                $("#temperatureKel").html(K2F(tempKel));
                $("#forecastTemp0Kel").html(K2F(forecastTempKel[0]));
                $("#forecastTemp1Kel").html(K2F(forecastTempKel[1]));
                $("#forecastTemp2Kel").html(K2F(forecastTempKel[2]));
                $("#forecastTemp3Kel").html(K2F(forecastTempKel[3]));
                $("#forecastTemp4Kel").html(K2F(forecastTempKel[4]));
                $("#forecastTemp5Kel").html(K2F(forecastTempKel[5]));
                $("#forecastTemp6Kel").html(K2F(forecastTempKel[6]));
                $("#forecastTemp7Kel").html(K2F(forecastTempKel[7])); 
            }); 
            $("#convertC").click(function(){
                $("#temperatureKel").html(K2C(tempKel));
                $("#forecastTemp0Kel").html(K2C(forecastTempKel[0]));
                $("#forecastTemp1Kel").html(K2C(forecastTempKel[1]));
                $("#forecastTemp2Kel").html(K2C(forecastTempKel[2]));
                $("#forecastTemp3Kel").html(K2C(forecastTempKel[3]));
                $("#forecastTemp4Kel").html(K2C(forecastTempKel[4])); 
                $("#forecastTemp5Kel").html(K2C(forecastTempKel[5]));
                $("#forecastTemp6Kel").html(K2C(forecastTempKel[6]));
                $("#forecastTemp7Kel").html(K2C(forecastTempKel[7])); 
            });
        }); 
        $.getJSON(forecastS, function(data){
            for(var i = 0;i<8;i++){
                forecastTempKel[i] = data.list[i].main.temp;    
            }
            console.log(forecastTempKel);
            $("#forecastTemp0Kel").html(K2C(forecastTempKel[0]));
            $("#forecastTemp1Kel").html(K2C(forecastTempKel[1]));
            $("#forecastTemp2Kel").html(K2C(forecastTempKel[2]));
            $("#forecastTemp3Kel").html(K2C(forecastTempKel[3]));
            $("#forecastTemp4Kel").html(K2C(forecastTempKel[4])); 
            $("#forecastTemp5Kel").html(K2C(forecastTempKel[5]));
            $("#forecastTemp6Kel").html(K2C(forecastTempKel[6]));
            $("#forecastTemp7Kel").html(K2C(forecastTempKel[7]));
            
        }); 
    }

    //the "how to use" button
    $("#info").click(function(){
        alert("The temperature are default to Celsius, by clicking on the convert button allows you to switch between Fahrenheit and Celsius."+
            "\nAlso, by clicking the forecast button you will be able to see the long term forecast for the next 8 days and short term forecast for the next 24 hours.");
    });

});
    

var locVan,iconVan,tempVan,humidityVan,windVan,directionVan;
var locVic,iconVic,tempVic,humidityVic,windVic,directionVic;
var locKel,iconKel,tempKel,humidityKel,windKel,directionKel;

var forecastTempVan=[];
var forecastTempVic=[];
var forecastTempKel=[];

var forecastTimeVan=[];
var forecastTimeVic=[];
var forecastTimeKel=[];


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
        low = (low + range) % 360;
        high = (high + range) % 360;
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
