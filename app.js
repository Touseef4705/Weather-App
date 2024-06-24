const apiKey = "c153479685c47f1b34a83591f3b1acbe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weather = document.querySelector(".weather");
const notFound = document.querySelector(".notFound");

async function checkweather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  if (response.status === 200) {
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    weather.style.display = "block";
    notFound.style.display = "none";
  } else {
    weather.style.display = "none";
    notFound.style.display = "flex";
  }
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
  console.log(searchBox.value);
});
