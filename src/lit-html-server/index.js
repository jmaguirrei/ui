
const unsafeCode = '@__unsafe__';

function manageFunction(str) {
  const indexOfHandler = str.indexOf('@');
  return str.substr(0, indexOfHandler).trim();
}

function manageVal(leftValue, str) {
  const isArray = Array.isArray(str);
  if (isArray) return str.join('');
  if (str.length === 0) {
    if (leftValue.endsWith('=')) return '""';
    return '';
  }
  if (str.indexOf(unsafeCode) > -1) return str.replace(unsafeCode, '');
  if (str.match(/\r|\n/)) return str;
  return `"${str}"`;
}

export const html = (fixed, ...dynamic) => {
  return fixed.reduce((acum, value, i) => {
    const dynVal = dynamic[i] || '';
    const isFunction = typeof dynVal === 'function';
    if (isFunction) return `${acum}${manageFunction(value)}`;
    const valString = manageVal(value, String(dynVal));
    return `${acum}${value}${valString}`.replace(/>\s*,\s*</, '><');

  }, '');
};

export const repeat = (data, key, render) => {
  return data.map(render);
};

export const guard = (item, render) => {
  return render();
};

export const unsafeHTML = htmlString => {
  return `${unsafeCode}${htmlString.trim()}`;
};

// Not used in SSR
export const render = () => undefined;
