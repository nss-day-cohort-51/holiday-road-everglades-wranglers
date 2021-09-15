import { USMap } from "./map/Map.js";
import { getParks } from "./parks/ParkDataManager.js";
import { ParkSelectorCard,EaterySelectorCard,BizSelectorCard } from "./SelectorCards.js";
import { getEateries } from "./eateries/EateryDataManager.js"
import { getAttractions } from "./attractions/AttractionDataManager.js"

// ===============================================================================

const parkElement = document.querySelector(".tripSelection");
const applicationElement = document.querySelector(".mapSection");

// =============================event listeners===================================

applicationElement.addEventListener("click", (event) => {
  parkElement.innerHTML = ""
  if (event.target.id.length === 2) {
     getParks(event.target.id).then((park) => {
      parkElement.innerHTML += ParkSelectorCard(park.data);
    });
     getEateries(event.target.id).then((eatery) => {
      parkElement.innerHTML += EaterySelectorCard(eatery);
    });
    getAttractions(event.target.id).then((attractions) => {
      parkElement.innerHTML += BizSelectorCard(attractions);
    });
  }
});

// ===========================map function========================================

applicationElement.innerHTML = USMap();

$("path, circle").hover(function (e) {
  $("#info-box").css("display", "block");
  $("#info-box").html($(this).data("info"));
});

$("path, circle").mouseleave(function (e) {
  $("#info-box").css("display", "none");
});

$("path").on("click", function () {
  $("path.selected").attr("class", "");
  $(this).attr("class", "selected");
});

$(document)
  .mousemove(function (e) {
    $("#info-box").css("top", e.pageY - $("#info-box").height() - 30);
    $("#info-box").css("left", e.pageX - $("#info-box").width() / 2);
  })
  .mouseover();

// =========================================================================
import { callApi } from "./weather/weatherDisplay.js";

callApi();
