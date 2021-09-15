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
