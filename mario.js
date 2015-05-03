var mario = {};

mario.compile = function (templateContent, data) {
    var match;
    var expression = /::(.+?)::/g;
    var cursor = 0;

    while (match = expression.exec(templateContent)) {
        console.log(templateContent.slice(cursor, match.index));
        cursor = (match.index + match[0].length);
    }
};

module.exports = mario;
