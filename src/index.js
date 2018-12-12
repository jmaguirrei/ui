
import { createHoc } from './hoc/createHoc';
import * as litHtmlServer from './lit-html-server';
import { registerStyles, inlineStyle } from './styles';

export const universalUI = isBrowser => {

  if (isBrowser) {
    return {
      html: require('lit-html').html,
      render: require('lit-html').render,
      repeat: require('lit-html/directives/repeat.js').repeat,
      guard: require('lit-html/directives/guard.js').guard,
      registerStyles: registerStyles(true),
      inlineStyle: inlineStyle(true),
      createHoc: createHoc(true),
    };
  }

  return {
    html: litHtmlServer.html,
    render: litHtmlServer.render,
    repeat: litHtmlServer.repeat,
    guard: litHtmlServer.guard,
    // html: require('@popeindustries/lit-html-server').html,
    // render: require('@popeindustries/lit-html-server').renderToString,
    // repeat: require('@popeindustries/lit-html-server/directives/repeat.js').repeat,
    // guard: require('@popeindustries/lit-html-server/directives/guard.js').guard,
    registerStyles: registerStyles(false),
    inlineStyle: inlineStyle(false),
    createHoc: createHoc(false),
  };

};

