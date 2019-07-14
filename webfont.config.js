const hash = require('folder-hash');
let folderHash;
hash.hashElement('./src/assets/images/icons/', {encoding: 'hex'})
  .then(function (result) {
    folderHash = result.hash;
  });
require('deasync').loopWhile(function () {
  return !folderHash;
});

const name = 'icons-' + folderHash.substr(0, 5);
module.exports = {
  fontName: name,
  template: './src/styles/webfont.scss.njk',
  templateClassName: 'icon',
  templateFontPath: '/webfont/',
  templateFontName: name
};
