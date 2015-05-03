var mario = require('../mario.js');
var fs = require('fs');

var template = fs.readFileSync('./test/template.html', {
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

var compiled = mario.compile(template, data);

// Print results
console.log(compiled);
