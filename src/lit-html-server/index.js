
function manageFunction(str) {
  const indexOfHandler = str.indexOf('@');
  return str.substr(0, indexOfHandler).trim();
}

function manageVal(str) {
  const isArray = Array.isArray(str);
  if (isArray) return str.join('');
  if (str.length === 0) return '';
  console.log("str", str, str.length);
  return `"${str}"`;
}

export const html = (fixed, ...dynamic) => {
  console.log("fixed", fixed);
  console.log("dynamic", dynamic);
  return fixed.reduce((acum, value, i) => {
    console.log("value", value);
    const dynVal = dynamic[i] || '';
    const isFunction = typeof dynVal === 'function';
    if (isFunction) return `${acum}${manageFunction(value)}`;
    const valString = manageVal(dynVal);
    console.log("valString", valString);
    return `${acum}${value}${valString}`;

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
