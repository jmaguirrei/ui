import stylis from 'stylis';// stylis minify CSS and add vendor prefixesexport function registerStyles(registerNumber, styles) {  console.log("stylis", stylis);  if (!styles || !global.document) return [];  // const stylis = require('stylis');  const node = document.getElementById('component-styles');  return Object.keys(styles).map(className => {    const newClassName = `${className}--${registerNumber}`;    const cssRules = styles[className];    node.innerHTML += stylis(`.${newClassName}`, cssRules);    return {      className,      newClassName,    };  });}