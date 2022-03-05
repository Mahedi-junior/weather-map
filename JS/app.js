const API_KEY = `fd366d30cf35885002dee3ddd89c1841`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';
    document.getElementById('spinner').style.display = 'block';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
        // console.log(url);
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temperature) => {
    document.getElementById('spinner').style.display = 'none';

    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main)
        // set weather icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)

}