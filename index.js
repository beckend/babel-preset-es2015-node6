/**
 * Refer to https://github.com/babel/babel/blob/master/packages/babel-preset-es2015/src/index.js
 */

const moduleTypes = ['commonjs', 'amd', 'umd', 'systemjs'];

const preset = (context, { loose, modules } = { loose: false, modules: 'commonjs' }) => {
  if (typeof loose !== 'boolean') throw new Error("Preset es2015 'loose' option must be a boolean.");
  if (modules !== false && moduleTypes.indexOf(modules) === -1) {
    throw new Error("Preset es2015 'modules' option must be 'false' to indicate no modules\n" +
      "or a module type which be be one of: 'commonjs' (default), 'amd', 'umd', 'systemjs'");
  }

  return {
    plugins: [
      require('babel-plugin-transform-es2015-function-name'),
      modules === 'commonjs' && [require('babel-plugin-transform-es2015-modules-commonjs'), { loose }],
      modules === 'systemjs' && [require('babel-plugin-transform-es2015-modules-systemjs'), { loose }],
      modules === 'amd' && [require('babel-plugin-transform-es2015-modules-amd'), { loose }],
      modules === 'umd' && [require('babel-plugin-transform-es2015-modules-umd'), { loose }],
    ].filter(Boolean)
  };
}

module.exports = preset({});

Object.defineProperty(module.exports, 'buildPreset', {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
});
