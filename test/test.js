var Mario = require('../lib/engine.js').Mario;
var fs = require('fs');

var mario = new Mario(fs.readFileSync('./template.html', {
    encoding: 'utf-8'
}), {
    exampleArray: [ 'first', 'second', 'third' ],
    option: {
        x: {
            y: 5,
            z: 'third'
        }
    },
    show: true
});

console.log(mario.compile());