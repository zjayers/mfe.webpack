/**
 * This file is used to give webpack the chance to source all external
 * imports before executing in the browser.
 *
 * This file will be parsed and all imports will be requires, finally -
 * index.js will mount the code to the browser
 */

// -- Microservices
import { mount as mountProductsService } from "products/ProductsBootstrap";
import { mount as mountCartService } from "cart/CartBootstrap";

mountProductsService(document.getElementById("products-container"));
mountCartService(document.getElementById("cart-container"));
