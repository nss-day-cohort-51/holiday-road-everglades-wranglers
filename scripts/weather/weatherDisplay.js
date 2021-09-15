import { getWeather } from "./WeatherDataManager.js";
import { weatherListing } from "./weatherList.js";

export const callApi = () => {
  getWeather().then((data) => {
    const display = document.querySelector(".display");

    let allHtml = "";

    const allData = data.list;

    for (const date of allData) {
      allHtml += weatherListing(date, data.city.name);
    }

    const display = document.querySelector(".display");

    let allHtml = "";

    const allData = data.list;

    for (const date of allData) {
      if (date.dt_txt.split(" ")[1] == "21:00:00") {
        allHtml += weatherListing(date, data.city.name);
        console.log(date);
      }
    }

    display.innerHTML += allHtml;
  });
};
