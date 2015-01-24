
/**
 * Module dependencies.
 */

var unfluff = require('../lib/unfluff');
var render = require('../lib/render');

/**
 * Render index html page.
 */

module.exports.index = function *() {
  this.body = yield render('index');
};

/**
 * API routes, fetch text.
 */

module.exports.fetch = function *() {
  var qs = this.request.query;
  if (!qs.url) return this.body = 'Need to provide URL.';
  this.body = yield unfluff(qs.url);
};
