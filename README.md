# `useEventListener`

`useEventListener` — это функция для удобного управления обработчиками событий для элементов DOM. Она позволяет добавлять и удалять обработчики событий, используя атрибуты элемента.

## Установка

Для использования функции `useEventListener` просто импортируйте ее в вашем проекте:

```javascript
import { useEventListener } from './path/to/useEventListener';
```

## Описание

Функция `useEventListener` принимает два параметра:

- `element`: HTML-элемент или строка, представляющая селектор элемента.
- `options`: объект с опциями, который может содержать обработчики событий и флаг для удаления обработчиков.

### Параметры

- **element** (HTMLElement | string): 
  - Элемент DOM, к которому будет добавлен обработчик события, или строка-селектор для поиска элемента.

- **options** (Object):
  - `clear`: (boolean) Если установлено в `true`, обработчик события будет удален после выполнения.
  - Обработчики событий: названия функций, которые будут вызваны при срабатывании событий.

## Пример использования

```javascript
const button = document.querySelector('#myButton');

useEventListener('body', {
    clickMe: () => {
        console.log('Button clicked!');
    },
    clear: false
});
```

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<!-- Here we pass "event" attrubute with value "click=clickMe"
 
 "click" - event name
 "clickMe" - event handler

 Library will automatically convert "click=clickMe" to event handler

 Also you can register several events and handlers for the same element
 
 Example:
 event="mouseover.click=clickMe.test" or event="mouseover.click=clickMe().test()"

-->

<body event="click=clickMe">

    <script
       type="module" src="./useEventListener.min.js"></script>
    <script type="module" src="./index.js"></script>
</body>

</html>
```

## Как это работает

1. **Проверка элемента**: Функция проверяет, является ли `element` `null` или `undefined`. Если так, выбрасывается ошибка.
   
2. **Селектор**: Если `element` — строка, функция пытается найти элемент через `document.querySelector`.

3. **Атрибут события**: Функция ожидает, что элемент содержит атрибут `event`, который определяет, какие события и обработчики использовать.

4. **Добавление обработчиков**: Обработчики событий добавляются к элементу. Если установлено свойство `clear` в `options`, обработчики удаляются после выполнения.

5. **Возврат данных**: Функция возвращает массив зарегистрированных элементов, включая текущий элемент и его настройки.

## Обработка ошибок

Функция включает обработку ошибок, которая выводит сообщение в консоль при возникновении ошибок, таких как отсутствие элемента или атрибута `event`.

## Заключение

Функция `useEventListener` предоставляет удобный способ управления событиями в JavaScript, позволяя легко добавлять и удалять обработчики, основываясь на атрибутах элемента. Это упрощает работу с событиями и улучшает читаемость кода.
