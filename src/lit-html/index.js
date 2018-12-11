

function manageHandler(str) {
  const indexOfHandler = str.indexOf('@');
  return str.substr(0, indexOfHandler).trim();
}

let html = (fixed, ...dynamic) => {
  return fixed.reduce((acum, value, i) => {
    const dynVal = dynamic[i] || '';
    const isArray = Array.isArray(dynVal);
    const isFunction = typeof dynVal === 'function';
    if (isFunction) return `${acum}${manageHandler(value)}`;
    const dynValStr = isArray ? dynVal.join('') : dynVal;
    return `${acum}${value}${dynValStr}`;
  }, '');
};

let repeat = (data, key, render) => {
  return data.map(render);
};

let guard = (item, render) => {
  return render();
};

let render = (htmlString, nodeId) => {
  const node = document.getElementById(nodeId);
  node.innerHTML = htmlString;
};

if (process.browser) {
  html = require('lit-html').html;
  console.log("html", html);
  render = require('lit-html').render;
  console.log("render", render);
  repeat = require('lit-html/directives/repeat.js').repeat;
  guard = require('lit-html/directives/guard.js').guard;
}

export { html, render, repeat, guard };
