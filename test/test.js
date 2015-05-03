var engine = require('../mario.js');
var fs = require('fs');

console.log(engine.compile(fs.readFileSync('./template.html', {
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
}));
