"use strict";
function formatString(input, toUpper) {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);
