//first thing to do is get the longitude and latitude of our location
const locaTion = document.querySelector('#location');
const tempDesc = document.querySelector('.temperature-description');
const submit = document.getElementById('submit-btn');
const weatherIcon = document.getElementById('icon');
const tempDeg = document.querySelector('.temperature-degree');
const cityName = document.getElementById('cityname');
const localTime = document.getElementById('current-time');



//submit.addEventListener('click', () => {
//
//    const proxy = 'http://cors-anywhere.herokuapp.com/';
//    const api = `${proxy}https://api.weatherapi.com/v1/current.json?key=3ead6e9c90da48d7911201423210106&q=${locaTion.value}&aqi=no`;
//
//    fetch(api)
//        .then(response => {
//            return response.json();
//        })
//        .then(data => {
//            console.log(data);
//            if (data.hasOwnProperty('error')) {
//                cityName.textContent = 'No Matching Location';
//                tempDesc.textContent = 'invalid location';
//            } else {
//
//                const {
//                    condition,
//                    temp_c
//                } = data.current;
//
//                const {
//                    name,
//                    country,
//                    localtime
//                } = data.location;
//
//                weatherIcon.src = condition.icon;
//                weatherIcon.classList.remove('hidden');
//
//                tempDesc.textContent = condition.text;
//                tempDeg.textContent = temp_c;
//
//                cityName.textContent = `${name}, ${country}`;
//                localTime.textContent = localtime
//            }
//        })
//
//});

window.addEventListener('load', () => {

    fetch('http://cors-anywhere.herokuapp.com/http://ipinfo.io')
        .then(response => {
            console.log(response);
        })
    //    let long;
    //    let lat;
    //
    //    if (navigator.geolocation) {
    //        navigator.geolocation.getCurrentPosition(position => {
    //
    //        })
    //    }

});
