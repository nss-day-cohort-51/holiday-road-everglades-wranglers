import { USMap } from "./map/Map.js";
import { getParks } from "./parks/ParkDataManager.js";
import { ParkSelectorCard,EaterySelectorCard,BizSelectorCard } from "./SelectorCards.js";
import { getEateries } from "./eateries/EateryDataManager.js"
import { getAttractions } from "./attractions/AttractionDataManager.js"
import { ParkPreviewCard, BizPreviewCard, EateryPreviewCard } from "./TripPreviewCards.js";

// ===============================================================================

const parkElement = document.querySelector(".tripSelection");
const applicationElement = document.querySelector(".mapSection");

// =============================event listeners===================================

let parkData = null
let bizData = null
let eateryData = null

applicationElement.addEventListener("click", (event) => {
  parkElement.innerHTML = "<h2>select a park bizzarrie and eatery</h2>"
  if (event.target.id.length === 2) {
    getParks(event.target.id).then((park) => {
      parkElement.innerHTML += ParkSelectorCard(park.data); 
      parkData = park.data
    });
     getEateries(event.target.id).then((eatery) => {
      parkElement.innerHTML += EaterySelectorCard(eatery);
      eateryData = eatery
    });
    getAttractions(event.target.id).then((attractions) => {
      parkElement.innerHTML += BizSelectorCard(attractions);
      bizData = attractions
    });
  }
});

document.getElementsByClassName("tripSelection")[0].addEventListener('click', function(event) {
  if (event.target && event.target.className === "dropdown" && event.target.id.endsWith("Dropdown")) {
    if (event.target.selectedIndex > 0) {
      if (event.target.id === "parkDropdown") {
        ShowParkPreview(event, parkData);
      } else if (event.target.id === "bizDropdown") {
        ShowBizPreview(event, bizData);
      } else if  (event.target.id === "eateryDropdown") {
        ShowEateryPreview(event, eateryData);
      }
    }
  }
})

const ShowBizPreview = (event, data) => {
  let parkName = event.target.options[event.target.selectedIndex].text
  let parkImage = data[event.target.selectedIndex].description
  document.querySelector(".previewCards").innerHTML += BizPreviewCard(parkName, parkImage)
}

const ShowEateryPreview = (event, data) => {
  let parkName = event.target.options[event.target.selectedIndex].text
  let parkImage = data[event.target.selectedIndex].description
  document.querySelector(".previewCards").innerHTML += EateryPreviewCard(parkName, parkImage)
}

const ShowParkPreview = (event, data) => {
  let parkName = event.target.options[event.target.selectedIndex].text
  let parkImage = data[event.target.selectedIndex - 1].images[0].url
  document.querySelector(".previewCards").innerHTML += ParkPreviewCard(parkName, parkImage)
}

// ===========================map function========================================

applicationElement.innerHTML = USMap();

$("path, circle").hover(function (e) {
  $("#info-box").css("display", "block");
  $("#info-box").html($(this).data("info"));
});

$("path, circle").mouseleave(function (e) {
  $("#info-box").css("display", "none");
});

$(document)
  .mousemove(function (e) {
    $("#info-box").css("top", e.pageY - $("#info-box").height() - 30);
    $("#info-box").css("left", e.pageX - $("#info-box").width() / 2);
  })
  .mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (ios) {
  $("a").on("click touchend", function () {
    var link = $(this).attr("href");
    window.open(link, "_blank");
    return false;
  });
}

// =========================================================================
import { callApi } from "./weather/weatherDisplay.js";

callApi();
