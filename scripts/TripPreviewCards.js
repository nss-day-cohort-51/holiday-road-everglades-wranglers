export const ParkPreviewCard = (parkName, image) => {
    return `
    <section class="parkPreview">
        <h3>${parkName}</h3>
        <img src="${image}" alt="parkImage" />
        <section class="modifyButtons">
            <button id="editBtn_${parkName}">Edit</button>
            <button id="detailsBtn_${parkName}">Details</button>
        </section>
    </section>`
}

export const BizPreviewCard = (bizName, image) => {
    return `
    <section class="bizPreview">
        <h3>${bizName}</h3>
        <img src="${image}" alt="bizImage" />
        <section class="modifyButtons">
            <button id="editBtn_${bizName}">Edit</button>
            <button id="detailsBtn_${bizName}">Details</button>
        </section>
    </section>`
}

export const EateryPreviewCard = (eateryName, image) => {
    return `
    <section class="eateryPreview">
        <h3>${eateryName}</h3>
        <img src="${image}" alt="eateryImage" />
        <section class="modifyButtons">
            <button id="editBtn_${eateryName}">Edit</button>
            <button id="detailsBtn_${eateryName}">Details</button>
        </section>
    </section>`
}