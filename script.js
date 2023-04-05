DefaultCity = "Mathura";
const CheckCity = /^[A-Za-z]+$/;

CurrentCity = document.getElementById('currcity');
CurrentDate = document.getElementById('currDate');
CurrentTime = document.getElementById('currTime');
Condition = document.getElementById('Condition');
ConditionIcon = document.getElementById('ConditionIcon');
Temperature = document.getElementById('Temperature');
Humidity = document.getElementById('Humidity');
WindSpeed = document.getElementById('WindSpeed');
GetPlace = document.getElementById('get_Place');
Searchbutton = document.getElementById('search_button');

// Day 1 Elements decelare..

Condition1 = document.getElementById('day1condition');
Condition1Icon = document.getElementById('condition1icon');
Temperature1 = document.getElementById('day1temperature');
Humidity1 = document.getElementById('day1humidity');
WindSpeed1 = document.getElementById('day1WindSpeed');

// Day 2 Elements decelare..

Condition2 = document.getElementById('day2condition');
Condition2Icon = document.getElementById('condition2icon');
Temperature2 = document.getElementById('day2temperature');
Humidity2 = document.getElementById('day2humidity');
WindSpeed2 = document.getElementById('day2WindSpeed');

// Day 3 Elements decelare..

Condition3 = document.getElementById('day3condition');
Condition3Icon = document.getElementById('condition3icon');
Temperature3 = document.getElementById('day3temperature');
Humidity3 = document.getElementById('day3humidity');
WindSpeed3 = document.getElementById('day3WindSpeed');

// Day 4 Elements decelare..

Condition4 = document.getElementById('day4condition');
Condition4Icon = document.getElementById('condition4icon');
Temperature4 = document.getElementById('day4temperature');
Humidity4 = document.getElementById('day4humidity');
WindSpeed4 = document.getElementById('day4WindSpeed');

// Day 5 Elements decelare..

Condition5 = document.getElementById('day5condition');
Condition5Icon = document.getElementById('condition5icon');
Temperature5 = document.getElementById('day5temperature');
Humidity5 = document.getElementById('day5humidity');
WindSpeed5 = document.getElementById('day5WindSpeed');

// Day 6 Elements decelare..

Condition6 = document.getElementById('day6condition');
Condition6Icon = document.getElementById('condition6icon');
Temperature6 = document.getElementById('day6temperature');
Humidity6 = document.getElementById('day6humidity');
WindSpeed6 = document.getElementById('day6WindSpeed');

const getWheatherData =  (city) =>{
    const url = `http://api.weatherapi.com/v1/forecast.json?key=b366f5f20b184ad6ba7183641230104&q=${city}&days=6&aqi=no&alerts=no`;
    
    fetch(url).then((resp) => resp.json())
    .then(data =>{ 
        return displayWheather(data)
    })
    .catch(()=>{
        GetPlace.focus();
        GetPlace.value = "";
    })

}

Searchbutton.addEventListener('click', (event)=>{
        console.log(CurrentCity.value);
        getWheatherData(GetPlace.value);
})

const displayWheather = (WeatherData) =>{
    CurrentCity.innerHTML = `${GetPlace.value}`; 
    Temperature.innerHTML =`${WeatherData.current.temp_c}`;
    Condition.innerHTML = `${WeatherData.current.condition.text}`;
    Humidity.innerHTML = `${WeatherData.current.humidity}`; 
    WindSpeed.innerHTML = `${WeatherData.current.wind_kph}`;
    ConditionIcon.innerHTML =`<img src="${WeatherData.current.condition.icon}" alt="Condition-Icon">`

    // Day 1 Forecast

    Condition1.innerHTML = `<p>Condition <span>${WeatherData.forecast.forecastday[1].day.condition.text}</span> </p>`
   Condition1Icon.innerHTML = `<span> <img src="${WeatherData.forecast.forecastday[1].day.condition.icon}" alt="Condition-Icon" class="Icon124"></span> `
    Temperature1.innerHTML =  `${WeatherData.forecast.forecastday[1].day.avgtemp_c}`+"&deg;C" ;
    Humidity1.innerHTML =  `${WeatherData.forecast.forecastday[1].day.avghumidity}` + "&percnt;";
    WindSpeed1.innerHTML =  `${WeatherData.forecast.forecastday[1].day.maxtemp_c}` + "Km/h";

     // Day 2 Forecast
     Condition2.innerHTML=`<p>Condition <span>${WeatherData.forecast.forecastday[2].day.condition.text}</span> </p>`;
     Condition2Icon.innerHTML=`<span> <img src="${WeatherData.forecast.forecastday[2].day.condition.icon}" alt="Condition-Icon" class="Icon124"></span> `;
     Temperature2.innerHTML =  `${WeatherData.forecast.forecastday[2].day.avgtemp_c}`+"&deg;C" ;
     Humidity2.innerHTML =  `${WeatherData.forecast.forecastday[2].day.avghumidity}` + "&percnt;";
     WindSpeed2.innerHTML =  `${WeatherData.forecast.forecastday[2].day.maxtemp_c}` + "Km/h";

     // Day 3 Forecast

     Condition3.innerHTML=`<p>Condition <span>${WeatherData.forecast.forecastday[3].day.condition.text}</span> </p>`;
     Condition3Icon.innerHTML=`<span> <img src="${WeatherData.forecast.forecastday[3].day.condition.icon}" alt="Condition-Icon" class="Icon124"></span> `;
     Temperature3.innerHTML =  `${WeatherData.forecast.forecastday[3].day.avgtemp_c}`+"&deg;C" ;
     Humidity3.innerHTML =  `${WeatherData.forecast.forecastday[3].day.avghumidity}` + "&percnt;";
     WindSpeed3.innerHTML =  `${WeatherData.forecast.forecastday[3].day.maxtemp_c}` + "Km/h";

     // Day 4 Forecast

     Condition4.innerHTML=`<p>Condition <span>${WeatherData.forecast.forecastday[4].day.condition.text}</span> </p>`;
     Condition4Icon.innerHTML=`<span> <img src="${WeatherData.forecast.forecastday[4].day.condition.icon}" alt="Condition-Icon" class="Icon124"></span> `;
     Temperature4.innerHTML =  `${WeatherData.forecast.forecastday[4].day.avgtemp_c}`+"&deg;C" ;
     Humidity4.innerHTML =  `${WeatherData.forecast.forecastday[4].day.avghumidity}` + "&percnt;";
     WindSpeed4.innerHTML =  `${WeatherData.forecast.forecastday[4].day.maxtemp_c}` + "Km/h";

    // Day 5 Forecast

    Condition5.innerHTML=`<p>Condition <span>${WeatherData.forecast.forecastday[5].day.condition.text}</span> </p>`;
    Condition5Icon.innerHTML=`<span> <img src="${WeatherData.forecast.forecastday[5].day.condition.icon}" alt="Condition-Icon" class="Icon124"></span> `;
    Temperature5.innerHTML =  `${WeatherData.forecast.forecastday[5].day.avgtemp_c}`+"&deg;C" ;
    Humidity5.innerHTML =  `${WeatherData.forecast.forecastday[5].day.avghumidity}` + "&percnt;";
    WindSpeed5.innerHTML =  `${WeatherData.forecast.forecastday[5].day.maxtemp_c}` + "Km/h";

  

}

const days = ['Sunday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

setInterval(()=>{
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const hoursIn12HrFormat = hour>= 13 ? hour%12:hour;
    const ampm = hour>=12 ? 'PM' : 'AM';

    CurrentTime.innerHTML=hoursIn12HrFormat+':'+minutes+' '+`<span id="am-pm">${ampm}</span>`;
    CurrentDate.innerHTML=days[day]+', '+date+' '+months[month];
},1000)