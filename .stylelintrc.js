module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
  ignorePatterns: [
    'node_modules', // # node_modules
    'public', // # public route
    'coverage', // # testing
    '.next', // # build
    'dist', // # build
  ],
};
