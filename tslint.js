const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
    path.join(path.dirname(require.resolve('vrsource-tslint-rules')), 'rules')
  ],
  rules: {
    'prefer-const': true, // 2.1, 13.1
    'no-var-keyword': true, // 2.2
    'object-literal-shorthand': true, // 3.3, 3.4
    'object-shorthand-properties-first': true, // 3.5
    'object-literal-key-quotes': [
      true,
      'as-needed'
    ], // 3.6
    'prefer-array-literal': true, // 4.1
    quotemark: [
      true,
      'single',
      'jsx-double'
    ], // 6.1
    'no-eval': true, // 6.4
    'no-function-constructor-with-string-args': true, // 7.10
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always', // 7.11
        named: 'never' // 18.3
      }
    ],
    'no-param-reassign': true, // 7.12
    align: [
      true,
      'arguments',
      'parameters'
    ], // 7.15
    'ter-prefer-arrow-callback': [true], // 8.1
    'arrow-parens': false,
    'ter-arrow-parens': [
      true,
      'as-needed',
      {
        'requireForBlockBody': true
      }
    ], // 8.4
    'no-duplicate-imports': true, // 10.4
    'one-variable-per-declaration': [
      true,
      'ignore-for-loop'
    ], // 13.2
    'no-increment-decrement': true, // 13.6
    'triple-equals': [
      true,
      'allow-null-check'
    ], // 15.1
    'no-boolean-literal-compare': true, // 15.3
    'strict-boolean-expressions': true, // 15.3
    'brace-style': [
      true,
      '1tbs',
      {
        'allowSingleLine': true
      }
    ], // 16.2
    'comment-format': [
      true,
      'check-space'
    ], // 17.3
    indent: [
      true,
      'space'
    ],
    'ter-indent': [
      true,
      2,
      { 'SwitchCase': 1 }
    ], // 18.1
    whitespace: [
      true,
      'check-branch', // 18.3
      'check-decl', // 18.4
      'check-operator', // 18.4
      'check-preblock' // 18.2
    ],
    eofline: true, // 18.5
    'space-in-parens': [
      true,
      'never'
    ], // 18.9
    'object-curly-spacing': [
      true,
      'always'
    ], // 18.11
    'max-line-length': [
      true,
      120
    ], // 18.12
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never'
      }
    ], // 19.2
    semicolon: [
      true,
      'always'
    ], // 20.1
    radix: true, // 21.3
    'no-construct': true, // 21.3, 21.6
    'function-name': [
      true,
      {
        'static-method-regex': '^[a-z][\\w\\d]+$'
      } // 22.1
    ],
    'variable-name': [
      true,
      'check-format' // 22.2
    ],
    'no-var-self': true, // 22.5
    'import-name': true, // 22.6
    'multiline-ternary': ['error', 'always-multiline'], // 15.8
    'array-bracket-spacing': [
      'error',
      'always',
      {
        'singleValue': false,
        'objectsInArrays': false,
        'arraysInArrays': false
      }
    ], // 18.10,
    'computed-property-spacing': ['error', 'never'], // 18.10
    // angular-cli rules
    'arrow-return-shorthand': true,
    'callable-types': true,
    'class-name': true,
    'curly': true,
    'forin': true,
    'import-spacing': true,
    'interface-over-type-literal': true,
    'label-position': true,
    'member-access': false,
    'member-ordering': [
      true,
      {
        'order': [
          'static-field',
          'instance-field',
          'static-method',
          'instance-method'
        ]
      }
    ],
    'no-arg': true,
    'no-bitwise': true,
    'no-console': [
      true,
      'debug',
      'info',
      'time',
      'timeEnd',
      'trace'
    ],
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-empty': false,
    'no-empty-interface': true,
    'no-inferrable-types': [
      true,
      'ignore-params'
    ],
    'no-misused-new': true,
    'no-non-null-assertion': true,
    'no-shadowed-variable': true,
    'no-string-literal': false,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-trailing-whitespace': true,
    'no-unnecessary-initializer': true,
    'no-unused-expression': true,
    'no-use-before-declare': true,
    'object-literal-sort-keys': false,
    'one-line': [
      true,
      'check-open-brace',
      'check-catch',
      'check-else',
      'check-whitespace'
    ],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      }
    ],
  }
};
