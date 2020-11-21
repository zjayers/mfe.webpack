/**
 * This file is used to give webpack the chance to source all external
 * imports before executing in the browser.
 *
 * This file will be parsed and all imports will be requires, finally -
 * index.js will mount the code to the browser
 */
import faker from "faker";

// Function to mount the microservice to the DOM
const mount = (htmlElement) => {
  // Create an empty string to hold the products html
  let products = "";

  // Generate a set number of <div> elements with a fake product name inside
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  // Inject the new html into the DOM
  htmlElement.innerHTML = products;
};

export { mount };
