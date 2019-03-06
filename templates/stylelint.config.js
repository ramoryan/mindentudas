module.exports = {
  rules: {
    // Possible Errors

    //   Color
    'color-no-invalid-hex': true,

    //   Font family
    'font-family-no-duplicate-names': true,

    //   Function
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,

    //   String
    'string-no-newline': true,

    //   Unit
    'unit-no-unknown': true,

    //   Property
    'property-no-unknown': true,
    'property-blacklist': [ 'box-sizing' ],

    //   Keyframe declaration
    'keyframe-declaration-no-important': true,

    //   Declaration block
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,

    //   Block
    'block-no-empty': true,

    //   Selector
    'selector-pseudo-class-no-unknown': [ true, { ignorePseudoClasses: [ 'global', 'local' ] } ],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [ true, {
      ignoreTypes: ["/^[a-zA-Z]([a-zA-Z0-9]*-[a-zA-Z0-9]+)+/"],
    } ],

    //   Media feature
    'media-feature-name-no-unknown': true,

    //   At-rule
    'at-rule-no-unknown': [ true, { ignoreAtRules: [ 'function', 'mixin', 'if', 'each', 'include', 'for' ] } ],

    //   Comment
    'comment-no-empty': true,

    //   General / Sheet
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,

    // Limit language features

    //   Color
    'color-named': 'never',
    // 'color-hex-case': 'lower',

    //   Function
    'function-url-no-scheme-relative': true,
    'function-url-scheme-blacklist': [ 'ftp', '/^http/' ],

    //   Number
    'number-max-precision': 2,

    //   Time
    'time-min-milliseconds': 100,

    //   Unit
    'unit-whitelist': ['px', 'em', 'rem', '%', 's', 'deg'],

    //   Shorthand property
    'shorthand-property-no-redundant-values': true,

    //   Value
    'value-no-vendor-prefix': true,

    //   Property
    'property-no-vendor-prefix': [ true, { ignoreProperties: [
      'user-select'
    ] } ],

    //   Declaration
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-no-important': true,
    'declaration-property-value-blacklist': {
      'transition': [ 'all', 'ease' ]
    },

    //   Selector
    'selector-max-empty-lines': 0,
    'selector-max-universal' : 0,
    'selector-no-qualifying-type': [ true, { ignore: [ 'attribute' ] } ],

    //   Comment
    'comment-word-blacklist': [ 'FIXME' ],

    //   General / Sheet
    'max-nesting-depth': 3,
    'no-unknown-animations': true,

    // Stylistic issues

    //   Font weight
    'font-weight-notation': 'numeric',

    //   Function
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-name-case': 'lower',
    'function-url-quotes': 'always',

    //   Number
    'number-no-trailing-zeros': true,
    'number-leading-zero': 'never',

    //   String
    'string-quotes': 'single',

    //   Length
    'length-zero-no-unit': true,

    //   Unit
    'unit-case': 'lower',

    //   Value
    // 'value-keyword-case': 'lower',   font-family: Arial-t sem eszi meg...

    //   Value list
    'value-list-max-empty-lines': 0,
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',

    //   Property
    'property-case': 'lower',

    //   Declaration
    'declaration-colon-space-after': 'always',

    //   Declaration block
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    //   Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',

    //   Selector
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',

    //   Selector list
    'selector-list-comma-space-before': 'never',

    //   Rule
    'rule-empty-line-before': [ 'always', {
      except: ['first-nested'],
      ignore: ['after-comment']
    } ],

    //   Media feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    //   Media query list
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',

    //   At-rule
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',

    //   Comment
    'comment-whitespace-inside': 'always',

    //   General / Sheet
    'indentation': 2,
    'max-empty-lines': 2,
    'max-line-length': [ 80, { ignore: [ 'comments', 'non-comments' ] } ],
    'no-eol-whitespace': true,
  }
}
