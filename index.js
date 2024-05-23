import { useEventListener } from "./lib/useEventListener.js";

const btn = document.querySelector('#btn-1');
const link = document.querySelector('a');
const form = document.forms[0]


/* 

    API

    useEventListener(element, options = {})
    
    element - DOM element (variable) or CSS selector
    options - options object -> 
    {
        clear: boolean -> Clear all event listeners for this element
        [handler]: (e) -> Callback function. Name must match the name of the event in custom html attribute "event"
    } 
*/

const btnOptions = useEventListener('#btn-1', {
    async handleClick(e) {

        const response = await fetch('https://jsonplaceholder.typicode.com/todos')

        const data = await response.json();

        console.log(data);

        
    },

    handleMouseOver(e) {
        console.log('handleMouseOver', e.target);
    },

    clear: false
    
   
    
})



const htmlOptions = useEventListener(document.documentElement, {
    contextMenu(e) {
        e.preventDefault();
        console.log('contextMenu', e.target);
    }
})




const formOption = useEventListener(form, {
    submit(e){
        e.preventDefault();
        
        console.log('submit', e);
    }
})

console.log({btn: btnOptions(), html: htmlOptions(), form: formOption()});