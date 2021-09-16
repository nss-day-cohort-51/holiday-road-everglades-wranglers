export const ParkPreviewCard = (parkName, image) => {
  return `
    <section class="parkPreview">
        <h3>National Park: </h3>
        <h3>${parkName}</h3>
        <section class="modifyButtons">
            <button class="parkDetailsBtn" id="detailsBtn_${parkName}">Details</button>
        </section>
    </section>`;
};

export const ParkDetailsCard = (parkImage, parkDesc) => {
  return `<div class="parkinfo_wrapper">
            <img class="park_image" src="${parkImage}" alt="parkImage" />
            <div class="park_description">${parkDesc}</div>
          </div>`;
};

export const BizPreviewCard = (bizName, desc) => {
  return `
    <section class="bizPreview">
        <h3>"Bizarrerie"(Attraction): </h3> 
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
        <h3>Eatery: </h3>
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
