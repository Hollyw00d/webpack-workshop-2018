import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import "./footer.css";
import "./button.css";

// Typescript
import ConsoleLogs from './console-log.ts';
const sayHiObj = new ConsoleLogs();
console.log(sayHiObj.sayHiFunc());

// Vanilla JS
const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);