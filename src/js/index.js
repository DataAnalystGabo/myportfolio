import {} from "./nav.js";
import {} from "./scrolling.js";
//import {} from "./phpMailer.js";
import {Button} from "./Button.js"

document.querySelector('.button--download').addEventListener('click', ()=>{
    const button = new Button('download');
    button.success();
})
