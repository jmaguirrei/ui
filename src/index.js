
export { createHoc } from './hoc/createHoc';

import { registerStyles, inlineStyle } from './styles';

export const universalStyles = isBrowser => {

  if (isBrowser) {
    return {
      html: require('lit-html').html,
      render: require('lit-html').render,
      repeat: require('lit-html/directives/repeat.js').repeat,
      guard: require('lit-html/directives/guard.js').guard,
      registerStyles: registerStyles(true),
      inlineStyle: inlineStyle(true),
    };
  }

  return {
    html: require('@popeindustries/lit-html-server').html,
    render: require('@popeindustries/lit-html-server').renderToString,
    repeat: require('@popeindustries/lit-html-server/directives/repeat.js').repeat,
    guard: require('@popeindustries/lit-html-server/directives/guard.js').guard,
    registerStyles: registerStyles(false),
    inlineStyle: inlineStyle(false),
  };

};

