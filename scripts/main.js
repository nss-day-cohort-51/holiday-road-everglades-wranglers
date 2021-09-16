import { USMap } from "./map/Map.js";
import { getParks } from "./parks/ParkDataManager.js";
import { ParkSelectorCard,EaterySelectorCard,BizSelectorCard} from "./SelectorCards.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import { getAttractions } from "./attractions/AttractionDataManager.js";
import {ParkPreviewCard,BizPreviewCard,EateryPreviewCard} from "./TripPreviewCards.js";
import { callApi } from "./weather/weatherDisplay.js";
import { EateryWheelSelectorCard } from "./SelectorCards.js";
import { wheelchairFilter } from "./SelectorCards.js";

//#region event listeners

const parkElement = document.querySelector(".tripSelection");
const applicationElement = document.querySelector(".mapSection");
const wheel = document.querySelector('.filterWheel')
const eateriesWheel = document.querySelector('.eateriesWheel')
wheel.innerHTML = wheelchairFilter()
// =============================event listeners===================================
document.getElementById("saveTrip").disabled = true

let parkData = null;
let bizData = null;
let eateryData = null;

applicationElement.addEventListener("click", (event) => {
  parkElement.innerHTML = "<h2>select a park bizzarrie and eatery</h2>";
  if (event.target.id.length === 2) {
    getParks(event.target.id).then((park) => {
      parkElement.innerHTML += ParkSelectorCard(park.data);
      parkData = park.data;
    });
    getEateries(event.target.id).then((eatery) => {
      parkElement.innerHTML += EaterySelectorCard(eatery);
      eateryData = eatery;
    });
    getEateries(event.target.id).then(eateryArrayWheel =>
      {
        document.querySelector('input[name=checkbox]').addEventListener('change',e => 
        {
          e.preventDefault()
          if(e.target.checked)
          {
            console.log('checked')
            eateriesWheel.innerHTML +=EateryWheelSelectorCard(eateryArrayWheel)
        eateryData = eateryArrayWheel
          }
          else if(e.target.checked ==false)
          {
            console.log("unchecked")
            eateriesWheel.textContent = '' 
          }
        }
        )
        
      }
      )


    getAttractions(event.target.id).then((attractions) => {
      parkElement.innerHTML += BizSelectorCard(attractions);
      bizData = attractions;
    });
   
  }
});

document
  .getElementsByClassName("tripSelection")[0]
  .addEventListener("click", function (event) {
    if (
      event.target &&
      event.target.className === "dropdown" &&
      event.target.id.endsWith("Dropdown")
    ) {
      if (event.target.selectedIndex > 0) {
        if (event.target.id === "parkDropdown") {
          ShowParkPreview(event, parkData);
        } else if (event.target.id === "bizDropdown") {
          ShowBizPreview(event, bizData);
        } else if (event.target.id === "eateryDropdown") {
          ShowEateryPreview(event, eateryData);
        }
      }
      checkSave();
    }
  });

// const ShowParkDetails = (event, data) => {
//   let parkDesc = event.target.options[event.target.selectedIndex].description;
//   document.querySelector(".previewDetails").innerHTML +=
//     ParkDetailsCard(parkDesc);
// };

const ShowBizPreview = (event, data) => {
  let parkName = event.target.options[event.target.selectedIndex].text
  let parkImage = data[event.target.selectedIndex].description
  document.querySelector(".previewCards").innerHTML += BizPreviewCard(parkName, parkImage) 
}

const ShowEateryPreview = (event, data) => {
  let parkName = event.target.options[event.target.selectedIndex].text;
  let parkImage = data[event.target.selectedIndex].description;
  document.querySelector(".previewCards").innerHTML += EateryPreviewCard(
    parkName,
    parkImage
  );
};

const ShowParkPreview = (event, data) => {
  let parkName = event.target.options[event.target.selectedIndex].text
  let parkImage = data[event.target.selectedIndex - 1].images[0].url
  document.querySelector(".previewCards").innerHTML += ParkPreviewCard(parkName, parkImage)
  callApi();
}

document.getElementById("saveTrip").addEventListener('click', function(event) {
  if (event.target.disabled === false) {
    let parksArray = []
    let eateriesArray = []
    let bizzarriesArray = []
    let previewSection = document.getElementsByClassName("previewCards")[0]
    for (let childSection of previewSection.childNodes) {
      if (childSection.className == "eateryPreview") {
        let eateryName = childSection.childNodes[1].innerHTML
        let eateryDescription = childSection.childNodes[3].innerHTML
        eateriesArray.push({
          name: eateryName,
          description: eateryDescription
        })
      } else if (childSection.className == "parkPreview") {
        let parkName = childSection.childNodes[1].innerHTML
        let parkImage = childSection.childNodes[3].src
        parksArray.push({
          name: parkName,
          image: parkImage
        })
      } else if (childSection.className == "bizPreview") {
        let bizName = childSection.childNodes[1].innerHTML
        let bizDescription = childSection.childNodes[3].innerHTML
        bizzarriesArray.push({
          name: bizName,
          description: bizDescription
        })
      }
    }
    addTrip({
        parksArray,
        bizzarriesArray,
        eateriesArray
    })
  }
})

const checkSave = () => {
  if (document.querySelectorAll('.parkPreview').length > 0 && document.querySelectorAll('.bizPreview').length > 0 && document.querySelectorAll('.eateryPreview').length > 0) {
    document.getElementById("saveTrip").disabled = false
  }
}

//#endregion

//#region mapfunction

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

//#endregion

