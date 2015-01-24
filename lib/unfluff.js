
/**
 * Module dependencies.
 */

var extractor = require('unfluff', 'en');
var thunkify = require('thunkify-wrap');
var request = require('request');
var get = thunkify(request.get);

/**
 * Returns unfluff object.
 *
 * @param {String} url
 *
 * @yield {Object}
 */

module.exports = function *(url) {
  var res = yield get(url);
  return extractor(res[0].body);
};
