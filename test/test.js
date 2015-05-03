var Mario = require('../mario.js').Mario;
var fs = require('fs');

var template = fs.readFileSync('./template.html', {
    encoding: 'utf-8'
});

var data = {
    exampleArray: [ 'first', 'second', 'third' ],
    option: {
        x: {
            y: 5,
            z: 'third'
        }
    },
    show: true
};

var mario = new Mario(template, data);

var compiled = mario.compile();

// Print results
console.log(compiled);
