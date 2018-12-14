
function manageHandler(str) {
  const indexOfHandler = str.indexOf('@');
  return str.substr(0, indexOfHandler).trim();
}

export const html = (fixed, ...dynamic) => {
  return fixed.reduce((acum, value, i) => {
    const dynVal = dynamic[i] || '';
    const isArray = Array.isArray(dynVal);
    const isFunction = typeof dynVal === 'function';
    if (isFunction) return `${acum}${manageHandler(value)}`;
    const dynValStr = isArray ? dynVal.join('') : dynVal;
    return `${acum}${value}${dynValStr}`;
  }, '');
};

export const repeat = (data, key, render) => {
  return data.map(render);
};

export const guard = (item, render) => {
  return render();
};

export const unsafeHTML = htmlString => {
  return htmlString;
};

// Not used in SSR
export const render = () => undefined;
