function preset(context, opts) {
  var loose = opts && !!opts.loose;

  return {
    plugins: [
      [require('babel-plugin-transform-es2015-modules-commonjs'), { loose: loose }],
      require('babel-plugin-transform-es2015-function-name'),
    ],
  };
}

module.exports = preset({});

Object.defineProperty(module.exports, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
});
