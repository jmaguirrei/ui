
const isBrowser = process.browser;

export const html = isBrowser
  ? require('lit-html').html
  : require('@popeindustries/lit-html-server').html;

export const render = isBrowser
  ? require('lit-html').render
  : require('@popeindustries/lit-html-server').renderToString;

export const repeat = isBrowser
  ? require('lit-html/directives/repeat.js').repeat
  : require('@popeindustries/lit-html-server/directives/repeat.js').repeat;


export const guard = isBrowser
  ? require('lit-html/directives/guard.js').guard
  : require('@popeindustries/lit-html-server/directives/guard.js').guard;


