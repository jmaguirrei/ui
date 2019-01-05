
import { createHoc } from './hoc/createHoc';
import * as litHtmlServer from './lit-html-server';

export default isBrowser => {

  if (isBrowser) {
    return {
      html: require('lit-html').html,
      render: require('lit-html').render,
      repeat: require('lit-html/directives/repeat.js').repeat,
      guard: require('lit-html/directives/guard.js').guard,
      unsafeHTML: require('lit-html/directives/unsafe-html.js').unsafeHTML,
      createHoc: createHoc(true),
    };
  }

  return {
    html: litHtmlServer.html,
    render: litHtmlServer.render,
    repeat: litHtmlServer.repeat,
    guard: litHtmlServer.guard,
    unsafeHTML: litHtmlServer.unsafeHTML,
    createHoc: createHoc(false),
  };

};

