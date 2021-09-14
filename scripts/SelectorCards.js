import { Park } from "./parks/Park.js";

export const ParkSelectorCard = (parkArray) => {
  let output = `<section class="parkSelector"><select name="parks" id="parkDropdown"><option value="default">Select Park</option>`;
  for (const park of parkArray) {
    output += `<option value="${park.fullName}">${park.fullName}</option>`;
  }
  output += `</select></section>`;
  return output;
};

export const BizSelectorCard = (bizArray) => {
  let output = `<section class="bizSelector"><select name="bizarraries" id="bizDropdown"><option value="default">Select Biz</option>`;
  for (const biz in bizArray) {
    output += `<option value="${biz}">${biz}</option>`;
  }
  output += `</select></section>`;
  return output;
};

export const EaterySelectorCard = (eateryArray) => {
  let output = `<section class="eaterySelector"><select name="eateries" id="eateryDropdown"><option value="default">Select Eatery</option>`;
  for (const eatery in eateryArray) {
    output += `<option value="${eatery}">${eatery}</option>`;
  }
  output += `</select></section>`;
  return output;
};
