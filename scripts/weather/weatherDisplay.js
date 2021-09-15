import { getWeather } from "./WeatherDataManager.js";
import { weatherListing } from "./weatherList.js";


export const callApi = (parkZipCode) => {

  getWeather(parkZipCode).then((data) => {
    const display = document.querySelector(".display"); 
    var allHtml = ""
    const allData = data.list;
    for (const date of allData) {
      if (date.dt_txt.split(" ")[1] == "21:00:00") {
        allHtml += weatherListing(date, data.city.name);
      }
    }

    display.innerHTML = allHtml;

  })


}



