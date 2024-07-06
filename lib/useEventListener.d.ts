declare const registeredElems: any[];

interface EventListenerOptions {
  clear?: any;
  callbacks?: any;
}

type ElementOrSelector = Element | string;

declare export function useEventListener(
  element: ElementOrSelector,
  options?: EventListenerOptions
): () => typeof registeredElems;