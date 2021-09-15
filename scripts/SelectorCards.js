export const ParkSelectorCard = (parkArray) => {
  let output = `<section class="parkSelector"><select name="parks" id="parkDropdown"><option value="default">Select Park</option>`;
  for (const park of parkArray) {
    output += `<option class="parkitem" value="${park.fullName}">${park.fullName}</option>`;
  }
  output += `</select></section>`;
  return output;
};

export const BizSelectorCard = (bizArray) => {
  let output = `<section class="bizSelector"><select name="bizarraries" id="bizDropdown"><option value="default">Select Biz</option>`;
  for (const biz of bizArray) {
    output += `<option value="${biz.name}">${biz.name}</option>`;
  }
  output += `</select></section>`;
  return output;
};

export const EaterySelectorCard = (eateryArray) => {
  let output = `<section class="eaterySelector"><select name="eateries" id="eateryDropdown"><option value="default">Select Eatery</option>`;
  for (const eatery of eateryArray) {
    output += `<option value="${eatery.businessName}">${eatery.businessName}</option>`;
  }
  output += `</select></section>`;
  return output;
};
