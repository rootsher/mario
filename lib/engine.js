(function (root) {
    'use strict';

    var codeExpression = /::(.+?)::/g;
    var codeSpecialExpression = /(^ *(var|if|else|for|while|do|switch|case|default|break|{|}|;))(.*)?/g;

    /**
     * 
     * @param {string} templateContent
     * @param {Object} parameters
     */
    function Mario(templateContent, parameters) {
        /**
         * 
         * @type {string}
         */
        this._templateContent = templateContent;
        /**
         * 
         * @type {Object}
         */
        this._parameters = parameters;
        /**
         * 
         * @type {number}
         */
        this._cursor = 0;
    }

    /**
     * 
     * @param {Array} match
     * @returns {string}
     */
    Mario.prototype._buildLine = function (match) {
        // Contains chunk from template content.
        var line = this._templateContent.slice(this._cursor, match.index);
        // Contains code to later execute.
        var outputCode = '';

        line = line.replace(/"/g, '\\"');

        // If line without white chars and if not empty push line to output code.
        if (line.replace(/\s+/g, '') && line !== '') {
            outputCode += 'lines.push("' + line + '");';
        }

        line = match[1];

        if (line.replace(/\s+/g, '')) {
            // If line match to expression add line to output code.
            if (line.match(codeSpecialExpression)) {
                return outputCode += line;
            }

            // Otherwise push line to line list.
            outputCode += 'lines.push(' + line + ');';
        }

        return outputCode;
    };

    /**
     * 
     * @returns {string}
     */
    Mario.prototype.compile = function compile() {
        var match;
        // Constains code to execute.
        var outputCode = 'with (parameters) { var lines = [];';

        // While match does exist build output code and increase cursor.
        while (match = codeExpression.exec(this._templateContent)) {
            outputCode += this._buildLine(match);
            this._cursor = (match.index + match[0].length);
        }

        // At the every end join lines array and return function result.
        outputCode += 'return lines.join(""); }';
        // To avoid errors while executing code remove new lines.
        outputCode = outputCode.replace(/\n/g, '');

        // Execute the code, and pass parameters.
        return new Function('parameters', outputCode).call(undefined, this._parameters);
    };

    if ((typeof root.define === 'function') && root.define.amd) {
        root.define('Mario', [], Mario);
    } else if ((typeof root.module === 'object') && module.exports) {
        root.module.exports = Mario;
    } else {
        root.Mario = Mario;
    }

    return Mario;
}(this));