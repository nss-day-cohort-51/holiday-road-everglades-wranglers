export const ParkPreviewCard = (parkName, image) => {
  return `
    <section class="parkPreview">
        <h3>${parkName}</h3>
        <img src="${image}" alt="parkImage" />
        <section class="modifyButtons">
            <button id="editBtn_${parkName}">Edit</button>
            <button id="detailsBtn_${parkName}">Details</button>
        </section>
    </section>`;
};

export const ParkDetailsCard = (parkDesc) => {
  return `
    <section class="parkDetails">
        <p>${parkDesc}</p>
    </section>`;
};

export const BizPreviewCard = (bizName, desc) => {
  return `
    <section class="bizPreview">
        <h3>${bizName}</h3>
        <p>${desc}</p>
        <section class="modifyButtons">
            <button id="editBtn_${bizName}">Edit</button>
            <button id="detailsBtn_${bizName}">Details</button>
        </section>
    </section>`;
};

export const EateryPreviewCard = (eateryName, desc) => {
  return `
    <section class="eateryPreview">
        <h3>${eateryName}</h3>
        <p>${desc}</p>
        <section class="modifyButtons">
            <button id="editBtn_${eateryName}">Edit</button>
            <button id="detailsBtn_${eateryName}">Details</button>
        </section>
    </section>`;
};

export const TripPreviewCard = (parksArray, bizzarriesArray, eateriesArray, tripNum) => {
    let output = `<section class="trip"><h2>Trip ${tripNum}</h2><section class="parks"><h4>Parks:</h4><ul>`
    for (let park of parksArray) {
        output += `<li>${park.name}</li>`
    }
    output += '</ul></section><section class="bizzarries"><h4>Bizzarries:</h4><ul>'
    for (let bizzarrie of bizzarriesArray) {
        output += `<li>${bizzarrie.name}</li>`
    }
    output += '</ul></section><section class="bizzarries"><h4>Eateries:</h4><ul>'
    for (let eatery of eateriesArray) {
        output += `<li>${eatery.name}</li>`
    }
    output += '</ul></section></section>'
    return output
}
