/**
 * Author: Jeff Whelpley
 * Date: 11/24/14
 *
 * This library sits in between defining Jyt HTML functions
 * in your code and using Jyt to render a string of actual
 * HTML from the Jyt objects. This library will essentially
 * convert Jact DOM syntax into basic stuff that Jyt knows about
 * (i.e. elements, attributes, values).
 *
 * NOTE: this doesn't do anything yet. Will be implementing React shortly
 */
var jyt = require('jyt');

function render(elem, opts) {
    return jyt.render(elem, opts);
}

// these are the values exposed to external users of this library
module.exports = {
    render: render
};