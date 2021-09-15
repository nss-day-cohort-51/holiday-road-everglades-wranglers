export const ParkSelectorCard = (parkArray) => {
  let output = `<section class="parkSelector"><select name="parks" class="dropdown" id="parkDropdown"><option value="default">Select Park</option>`;
  for (const park of parkArray) {
    output += `<option class="dropdownitem" value="${park.fullName}">${park.fullName}</option>`;
  }
  output += `</select></section>`;
  return output;
};

export const BizSelectorCard = (bizArray) => {
  let output = `<section class="bizSelector"><select name="bizarraries" class="dropdown" id="bizDropdown"><option value="default">Select Biz</option>`;
  for (const biz of bizArray) {
    output += `<option class="dropdownitem" value="${biz.name}">${biz.name}</option>`;
  }
  output += `</select></section>`;
  return output;
};

export const EaterySelectorCard = (eateryArray) => {
  let output = `<section class="eaterySelector"><select name="eateries" class="dropdown" id="eateryDropdown"><option value="default">Select Eatery</option>`;
  for (const eatery of eateryArray) {
    output += `<option class="dropdownitem" value="${eatery.businessName}">${eatery.businessName}</option>`;
  }
  output += `</select></section>`;
  return output;
};
