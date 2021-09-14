import { USMap } from "./map/Map.js";
import { getParks } from "./parks/ParkDataManager.js";
import { getAttractions } from "./attractions/AttractionDataManager.js";
import { ParkSelectorCard, BizSelectorCard, EaterySelectorCard } from "./SelectorCards.js";
import { ParkPreviewCard, BizPreviewCard, EateryPreviewCard } from "./TripPreviewCards.js";

// ===============================================================================

const parkElement = document.querySelector(".tripSelection");
const applicationElement = document.querySelector(".mapSection");

// =============================event listeners===================================

applicationElement.addEventListener("click", (event) => {
  if (event.target.id.length === 2) {
    getParks(event.target.id).then((park) => {
      parkElement.innerHTML = ParkSelectorCard(park.data);
      document.getElementById("parkDropdown").addEventListener('click', (event) => {
        ShowParkPreview(event, park.data)
      })
    });
  }
});

const ShowParkPreview = (event, data) => {
  if (event.target.selectedIndex > 0) {
    let parkName = event.target.options[event.target.selectedIndex].text
    let parkImage = data[event.target.selectedIndex - 1].images[0].url
    document.querySelector(".previewCards").innerHTML += ParkPreviewCard(parkName, parkImage)
  }
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
