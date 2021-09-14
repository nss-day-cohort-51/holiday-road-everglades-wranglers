export const Park = (parkObject) => {
  return `
      <section class="park_wrapper">
        <header>
            <h2 class="park__title">${parkObject.fullName}</h2>
            <img class="park_image" src=${parkObject.images[0].url}>
            <div class="park_address">${parkObject.addresses.city}, ${parkObject.addresses[0].stateCode}</div>
            <div class="park_zip">${parkObject.addresses.postalCode}</div>
            <div class="park_description">${parkObject.description}</div>
        </header>
      </section>
    `;
};
