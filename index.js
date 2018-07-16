const loaderUtils = require('loader-utils');

function replaceImport(source, a, b) {
  if (source.length === 0 || source[9] !== '@') return source;
  const reg = new RegExp('(@import) (\'|")('.concat(a).concat(')(/.*)(\'|").*'))
  source = source.replace(reg, `@import "${b}$4";`);
  return source;
}
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  if (options && options.alias) {
    const alias = options.alias;
    for (const item in alias) {
      if (alias.hasOwnProperty(item)) {
        // console.log(item, '---', alias[item]);
        source = replaceImport(source, item, alias[item]);
      }
    }
  }
  return source;
};
