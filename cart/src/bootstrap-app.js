/**
 * This file is used to give webpack the chance to source all external
 * imports before executing in the browser.
 *
 * This file will be parsed and all imports will be requires, finally -
 * index.js will mount the code to the browser
 */
import faker from "faker";

const mount = (el) => {
  el.innerHTML = `<div>You have ${faker.random.number()} items in your cart</div>`;
};

export { mount };
