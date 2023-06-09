module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'].map(function (key) {
    return require.resolve(key)
  }),
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'].map(
    function (key) {
      return require.resolve(key)
    },
  ),
  rules: {
    'no-descending-specificity': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'no-duplicate-selectors': null,
    'color-hex-length': null,
  },
}
