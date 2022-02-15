/* TODO: Create weather object and get the apiKey from openweathermap.org */
//https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=05c977930e1d4b4dae1a041dbe48a057

let weather = {
    "apiKey": "05c977930e1d4b4dae1a041dbe48a057",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { country } = data.sys;
        console.log(name, icon, description, temp, country);
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".contents").innerText = description.toUpperCase();
        document.querySelector(".temp").innerText = temp + "°C";
    }
}