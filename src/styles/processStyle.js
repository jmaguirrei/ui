import stylis from 'stylis';// stylis minify CSS and add vendor prefixesexport function processStyle(key, rules) {  if (!key) return stylis(null, rules);  return stylis(`.${key}`, rules);  // Construct the new string  // return Object.keys(styles).reduce((acum, key) => {  //   const cssRules = styles[key];  //   const cssRulesStyled = stylis(`.${key}`, cssRules);  //   return `${acum}${cssRulesStyled}`;  // }, '');}