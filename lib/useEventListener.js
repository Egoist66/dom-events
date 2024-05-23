
const registeredElems = [];

/**
 * Attaches event listeners to an element or a group of elements based on the provided options.
 *
 * @param {Element|string} element - The element or CSS selector to attach the event listeners to.
 * @param {Object} options - The options object that contains the configuration for the event listeners.
 * @param {boolean} [options.clear=false] - If true, removes all event listeners attached to the element.
 * @param {Object} [options.callbacks] - The callback functions to be executed when the events are triggered.
 * @return {Function} - shows the registered elements
 */

export function useEventListener(element, options = {}) {
    try {
        if (element === null || element === undefined) {
            throw new Error("Element is null or undefined");
        }


        if (typeof element === "string") {
            
            element = document.querySelector(element);

            if(!element.getAttribute("event")){
                throw new Error("Element has no event attribute")
            }

            const eventHandlersAttrs = element
                .getAttribute("event")
                .trim()
                .split("=");
            const events = eventHandlersAttrs[0].split(".");
            const handlers = eventHandlersAttrs[1].split(".");

            if (events && handlers) {

                if (events.length > 1 || handlers.length >= 1) {
                    events.forEach((e, i) => {
                        const trimedFnPattern = handlers[i]?.trim()?.replace('()', '')

                        const callbacks = options[trimedFnPattern];
                        element.addEventListener(e, callbacks);

                        if (options.clear) {
                            element.removeEventListener(e, callbacks);
                        }


                    });
                }
                else {
                    
                    element.addEventListener(events[0], options[handlers[0]?.trim()?.replace('()', '')]);

                    if (options.clear) {
                        element.removeEventListener(events[0], options[handlers[0]?.trim()?.replace('()', '')]);
                    }
                }

                return () => {
                    const data = [...registeredElems, { element, options, events, handlers }]
                    return data
                }
            }
        } else {


            if(!element.getAttribute("event")){
                throw new Error("Element has no event attribute")
            }

            const eventHandlersAttrs = element
                .getAttribute("event")
                .trim()
                .split("=");
            const events = eventHandlersAttrs[0].split(".");
            const handlers = eventHandlersAttrs[1].split(".");


            if (events && handlers) {

                if (events.length > 1 || handlers.length > 1) {
                    events.forEach((e, i) => {
                        const trimedFnPattern = handlers[i]?.trim()?.replace('()', '')
                        console.log(trimedFnPattern);
                        const callbacks = options[trimedFnPattern];
                        element.addEventListener(e, callbacks);

                        if (options.clear) {
                            element.removeEventListener(e, callbacks);
                        }


                    });
                }
                else {
                  
                    element.addEventListener(events[0], options[handlers[0]?.trim()?.replace('()', '')]);

                    if (options.clear) {
                        element.removeEventListener(events[0], options[handlers[0]?.trim()?.replace('()', '')]);
                    }
                }

                return () => {
                    const data = [...registeredElems, {element, options, events, handlers}]
                    return data
                }


            }
        }
    } catch (error) {
        console.error(error);
    }
}
