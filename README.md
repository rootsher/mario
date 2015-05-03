# mario.js

Simple template engine in JavaScript.

# Usage

Put some template in HTML:

```html
<div class="person-template">
  <h1>:: person.name ::</h1>
  <h2>:: person.surname ::</h2>
</div>
```

and in JavaScript:

```js
var $template = document.querySelector('.person-template').innerHTML;
var compiled = Mario.compile($template, {
    person: {
        name: "John",
        surname: "Dahlback"
    }
});
```

as results we have:

```html
<div class="person-template">
  <h1>John</h1>
  <h2>Dahlback</h2>
</div>
```

# Authors

 - [@rootsher](https://github.com/rootsher)
 - [@piecioshka](https://github.com/piecioshka)
 
# License 

[The Mit License](htt://piecioshka.mit-license.org)
