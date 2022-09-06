import * as flsFunctions from "./modules/functions.js";
import { beforeAfter } from "./modules/before-after.js";
import { mainMenu } from "./modules/mainMenu.js";
import { catalog } from "./modules/catalog.js";
import { product } from "./modules/product.js";

let mainPage = document.querySelector('.main');
let catalogPage = document.querySelector('.catalog-page');

flsFunctions.isWebp();

mainMenu();

if(mainPage.classList.contains('active')) {

    beforeAfter();
}

if (catalogPage.classList.contains('active')) {
    catalog();
    product();
}



