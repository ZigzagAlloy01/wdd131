const year = new Date().getFullYear();
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const temperature = document.querySelector('#temperature');
const conditions = document.querySelector('#conditions');
const wind = document.querySelector('#wind');
const weatherIcon = document.querySelector('#weather-icon');
const windChill = document.querySelector('#wind-chill');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=36.5&lon=127.75&units=imperial&appid=7ff796c8357d5aaa81ed1eec4088d6c4"

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
            console.log(error);
        }
}

function displayResults(data) {
    temperature.innerHTML = `${data.main.temp}&deg;F`;
    conditions.innerHTML = `${data.weather[0].description}`;
    wind.innerHTML = `${data.wind.speed.toFixed(0)} mph`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    windChill.innerHTML = calculateWindChill(data.main.temp, data.wind.speed);
}

function calculateWindChill(temperature, wind) {
    return (temperature <= 50 && wind > 3) ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16)).toFixed(1) 
        : "N/A"; 
}    

apiFetch();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

