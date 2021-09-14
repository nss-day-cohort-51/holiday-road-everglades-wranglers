import { getWeather } from "./WeatherDataManager.js";
import { weatherListing } from "./weatherList.js";


export const callApi = () => {


    getWeather().then(data => {



        const display = document.querySelector('.display')

        let allHtml = ""

        const allData = data.list

        for (const date of allData) {

            allHtml += weatherListing(date, data.city.name)

        }



        display.innerHTML += allHtml;


    }




    )
}