import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import { footer } from './footer';

const button = makeButton('Yay a button!!!!');
button.style = makeColorStyle('purple');
document.body.appendChild(button);
document.body.appendChild(footer);