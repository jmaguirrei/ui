
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

export {
  html,
  render,
  repeat,
  guard,
};

// const isBrowser = process.browser;

// export const html = isBrowser
//   ? require('lit-html').html
//   : require('@popeindustries/lit-html-server').html;

// export const render = isBrowser
//   ? require('lit-html').render
//   : require('@popeindustries/lit-html-server').render;

// export const repeat = isBrowser
//   ? require('lit-html/directives/repeat.js').repeat
//   : require('@popeindustries/lit-html-server/directives/repeat.js').repeat;


// export const guard = isBrowser
//   ? require('lit-html/directives/guard.js').guard
//   : require('@popeindustries/lit-html-server/directives/guard.js').guard;

