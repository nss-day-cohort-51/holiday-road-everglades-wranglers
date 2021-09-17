export const ParkPreviewCard = (parkName, image) => {
  return `
    <section class="parkPreview">
        <h3>${parkName}</h3>
        <section class="modifyButtons">
            <button class="parkDetailsBtn" id="detailsBtn_${parkName}">Details</button>
        </section>
    </section>`;
};

export const ParkDetailsCard = (parkImage, parkDesc) => {
  return `<img class="park_image" src="${parkImage}" alt="parkImage" />
            <div class="park_description">${parkDesc}</div>
          `;
};

export const BizPreviewCard = (bizName, desc) => {
  return `
    <section class="bizPreview"> 
        <h3>${bizName}</h3>
        <section class="modifyButtons">
            <button class="bizDetailsBtn" id="detailsBtn_${bizName}">Details</button>
        </section>
    </section>`;
};

export const BizDetailsCard = (bizDesc) => {
  return `
    <div class="biz_description">${bizDesc}</div>`;
};

export const EateryPreviewCard = (eateryName, desc) => {
  return `
    <section class="eateryPreview">
        <h3>${eateryName}</h3>
        <section class="modifyButtons">
            <button class="eatDetailsBtn" id="detailsBtn_${eateryName}">Details</button>
        </section>
    </section>`;
};

export const EateryDetailsCard = (eateryDesc) => {
  return `
    <div class="eatery_description">${eateryDesc}</div>`;
};
export const TripPreviewCard = (
  parksArray,
  bizzarriesArray,
  eateriesArray,
  tripNum
) => {
  let output = `<section class="trip"><h2>Trip ${tripNum}</h2><section class="parks"><h4>Parks:</h4><ul>`;
  for (let park of parksArray) {
    output += `<li>${park.name}</li>`;
  }
  output +=
    '</ul></section><section class="bizzarries"><h4>Bizzarries:</h4><ul>';
  for (let bizzarrie of bizzarriesArray) {
    output += `<li>${bizzarrie.name}</li>`;
  }
  output += '</ul></section><section class="bizzarries"><h4>Eateries:</h4><ul>';
  for (let eatery of eateriesArray) {
    output += `<li>${eatery.name}</li>`;
  }
  output += "</ul></section></section>";
  return output;
};
