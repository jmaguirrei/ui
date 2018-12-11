// stylis minify CSS and add vendor prefixesimport { stylis } from 'stylis';export function registerStyles(registerNumber, styles) {  if (!styles || !global.document) return [];  const node = document.getElementById('component-styles');  return Object.keys(styles).map(className => {    const newClassName = `${className}--${registerNumber}`;    const cssRules = styles[className];    node.innerHTML += stylis(`.${newClassName}`, cssRules);    return {      className,      newClassName,    };  });}