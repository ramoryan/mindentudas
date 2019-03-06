module.exports = {
  // "off"   or 0 - turn the rule off
  // "warn"  or 1 - turn the rule on as a warning (doesn’t affect exit code)
  // "error" or 2 - turn the rule on as an error (exit code will be 1)

  // https://github.com/babel/babel-eslint#setup
  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },

  "settings": {
    "react": {
      "pragma": "dom",
      "version": "latest"
    }
  },

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],

  "globals": {
    __DEV__: true,
    __SIMULATION__: true,
    JSXComponent: true,
    Fragment: true,
    HTMLElement: true,
    customElements: true,
    ajax: true,
    log: true,
    asElement: true,
    utils: true,
    Anim: true,
    anim: true,
    anime: true
  },

  "env": {
    "es6": true
  },

  "rules": {
    // http://eslint.org/docs/rules/#strict-mode

    "strict": 0, // nem kell

    // ES6
    // http://eslint.org/docs/rules/#ecmascript-6

    "arrow-body-style": [1, "as-needed"],
    "arrow-parens": 1,
    "arrow-spacing": [2, { "before": true, "after": true }],
    "constructor-super": 2,
    "generator-star-spacing": [1, { "before": true, "after": true }],
    // "lines-between-class-members": [ 1, "always", { exceptAfterSingleLine: true } ],
    "no-class-assign": 2,
    "no-confusing-arrow": [1, {"allowParens": true}],
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    "no-new-symbol": 2,
    "no-restricted-imports": 0, // TODO
    "no-this-before-super": 2,
    "no-useless-computed-key": 1,
    "no-useless-constructor": 0, // webcomponents miatt kikapcsolva
    "no-useless-rename": 1,
    "no-var": 2,
    "object-shorthand": [1, "always"],
    "prefer-arrow-callback": 1,
    "prefer-const": [1, {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }],
    "prefer-destructuring": [1, {
      "array": true,
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }],
    "prefer-numeric-literals": 0, // nem kell
    "prefer-rest-params": 1,
    "prefer-spread": 1,
    "prefer-template": 1,
    "require-yield": 0, // nem kell
    "rest-spread-spacing": [1, "never"],
    "sort-imports": 0, // nem kell
    "symbol-description": 0, // nem kell
    "template-curly-spacing": [1, "always"],
    "yield-star-spacing": [1, "both"],

    // Variables
    // http://eslint.org/docs/rules/#variables

    "init-declarations": 0, // szeretnek felvenni értékadás nélkül...
    "no-catch-shadow": 0, // IE8 supportnál kell
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-restricted-globals": 2,
    "no-shadow": 1,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 1,
    "no-undefined": 1,
    "no-unused-vars": [1, { "vars": "all", "args": "none" }],
    "no-use-before-define": 1,

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors

    "for-direction": 0, // nem használjuk, mert a for ciklus tiltva van.
    "getter-return": 2,
    "no-await-in-loop": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": 1,
    "no-console": 0, // majd ha egységesen a LOG függvényt fogjuk használni, akkor be kell kapcsolni!
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 1,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-prototype-builtins": 1,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0, // na ezt azért nem... :D
    "valid-typeof": 2,

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices

    "accessor-pairs": 1,
    "array-callback-return": 2,
    "block-scoped-var": 1,
    "class-methods-use-this": 0, // Igorék szeretnek olyan dolgokat is a class-ba pakolni, amik nem nyúlnak a this-hez.
    "complexity": 0, // Ez betarthatatlan a srácokkal
    "consistent-return": 1,
    "curly": [1, "multi-line"],
    "default-case": 0, // nem szoktunk default-ot használni
    "dot-location": [1, "property"],
    "dot-notation": 2,
    "eqeqeq": [1, "allow-null"],
    "guard-for-in": 1,
    // "max-classes-per-file": [ 2, 1 ], csak class lehetne a fájlban
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 1,
    "no-div-regex": 2,
    "no-else-return": 1,
    "no-empty-function": 1,
    "no-empty-pattern": 1,
    "no-eq-null": 1,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 0, // fölösleges
    "no-global-assign": 2,
    "no-implicit-coercion": 2,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 0, // ezt még úgy néz ki a babellel nem jól kezeli
    "no-iterator": 2,
    "no-labels": [1, { "allowLoop": false, "allowSwitch": false }],
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0, // ez általános rosszindulatot váltott ki a srácokból. :D
    "no-multi-spaces": 0, // jó volna, csak nehéz belőni az exceptions-t
    "no-multi-str": 1,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-restricted-properties": 0, // majd talán egyszer
    "no-return-assign": [1, "except-parens"],
    "no-return-await": 2,
    "no-script-url": 2,
    "no-self-assign": [2, {"props": false}],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": [ 1, { "allowTernary": true }],
    "no-unused-labels": 2,
    "no-useless-call": 2,
    "no-useless-concat": 1,
    "no-useless-escape": 1,
    "no-useless-return": 1,
    "no-void": 1,
    "no-warning-comments": 0, // szeretjük a TODO commenteket :)
    "no-with": 2,
    "prefer-promise-reject-errors": 1,
    "radix": 0, // nem kell
    "require-await": 0, // jelenleg nincs rá szükség
    "vars-on-top": 0, // túl szigorú
    "wrap-iife": [2, "any"],
    "yoda": [2, "never"],

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues

    "array-bracket-newline": 0, // TODO: ez majd kellene, csak ki kell sakkozni a jót
    "array-bracket-spacing": [1, "always"],
    "array-element-newline": 0, // TODO: ez is kell
    "block-spacing": [1, "always"],
    "brace-style": [1, "stroustrup", { "allowSingleLine": false }],
    "camelcase": [1, { "properties": "never" }],
    "capitalized-comments": 0, // túl szigorú
    "comma-dangle": 0, // mindegy
    "comma-spacing": [1, { "before": false, "after": true }],
    "comma-style": [1, "last"],
    "computed-property-spacing": 0, // TODO: ezt jobban meg kell nézni
    "consistent-this": 1,
    "eol-last": 1,
    "func-call-spacing": [2, "never"],
    "func-name-matching": 1,
    "func-names": 1,
    "func-style": 0, // itt is szabad kéz van
    "id-blacklist": 2,
    "id-length": 0, // nem használunk ID-kat
    "id-match": 0, // nem használunk ID-kat
    "indent": 0, // szabadság! ez nem a behúzási indent!
    "jsx-quotes": [1, "prefer-double"],
    "key-spacing": 0, // szabadság!
    "keyword-spacing": [1, { "before": true, "after": true }],
    "line-comment-position": 0, // mindegy
    "linebreak-style": 0, // TODO
    "lines-around-comment": 0, // mindegy
    "max-depth": 0, // TODO
    "max-len": [1, {
      "code": 100,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }],
    "max-lines": [1, 300],
    "max-nested-callbacks": [1, 3],
    "max-params": [1, 5],
    "max-statements": 0, // betarthatatlan a srácoknál
    "max-statements-per-line": [1, { "max": 1 }],
    "multiline-ternary": 0, // TODO
    "new-cap": [1, { "newIsCap": true, "capIsNew": false }],
    "new-parens": 2,
    "newline-per-chained-call": [1, { "ignoreChainWithDepth": 3 }],
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-continue": 0, // szeressük a continue-t :)
    "no-inline-comments": 0, // mindegy
    "no-lonely-if": 2,
    "no-mixed-operators": 1,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-assign": 0, // Igor miatt meg kell hagyni.
    "no-multiple-empty-lines": [1, { "max": 1 }],
    "no-negated-condition": 0, // ez is mindegy
    "no-nested-ternary": 0, // ezt is szeretjük
    "no-new-object": 2,
    "no-plusplus": 0, // hülyeség
    "no-restricted-syntax": 0, // TODO
    "no-tabs": 1,
    "no-ternary": 0, // ternary kell!
    "no-trailing-spaces": 1,
    "no-underscore-dangle": 0, // private|protected classváltozó megjelöléséhez használhatunk underscore-t
    "no-unneeded-ternary": [1, { "defaultAssignment": false }],
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": 0, // ki van kényszerítve a törés
    "object-curly-newline": 0, // mindegy
    "object-curly-spacing": [1, "always"],
    "object-property-newline": 0, // ez sem kell
    "one-var": 0, // nem kell
    "one-var-declaration-per-line": 0, // nem kell
    "operator-assignment": [1, "always"],
    "operator-linebreak": [1, "after", { "overrides": { "?": "before", ":": "before" } }],
    "padded-blocks": [1, "never"],
    // "padding-line-between-statements": 2,
    "quote-prop": 0, // hülyeség
    "quotes": [1, "single", "avoid-escape"],
    "require-jsdoc": 0, // nem kell
    "semi": [2, "never"],
    "semi-spacing": [1, { "before": false, "after": true }],
    "semi-style": 0, // nincs pontosvesszőnk
    "sort-keys": 0, // nem kell
    "sort-vars": 0, // nem kell
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, "always"],
    "space-in-parens": [1, "never"], // ebben az egyben különbözik a stílusunk Igorral, ezért csak warning
    "space-infix-ops": 1,
    "space-unary-ops": [1, { "words": true, "nonwords": false }],
    "spaced-comment": [1, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }],
    "switch-colon-spacing": 0, // mindegy
    "template-tag-spacing": 0, // nem használunk template tags-t
    "unicode-bom": 0, // nem kell
    "wrap-regex": 0, // mindegy

    // React
    // https://www.npmjs.com/package/eslint-plugin-react

    "react/boolean-prop-naming": 0, // TODO
    "react/button-has-type": 0, // TODO
    "react/default-props-match-prop-types": 0, // TODO
    "react/destructuring-assignment": 0, // TODO
    "react/display-name": 0, // TODO
    "react/forbid-component-props": 0, // TODO
    "react/forbid-dom-props": 0, // TODO
    "react/forbid-elements": 0, // TODO
    "react/forbid-prop-types": 0, // TODO
    "react/forbid-foreign-prop-types": 0, // TODO
    "react/no-access-state-in-setstate": 0, // TODO
    "react/no-array-index-key": 0, // TODO
    "react/no-children-prop": 0, // TODO
    "react/no-danger": 0, // TODO
    "react/react/no-danger-with-children": 0, // TODO
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 0, // TODO
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 0, // TODO
    "react/no-redundant-should-component-update": 0, // TODO
    "react/no-render-return-value": 2,
    "react/no-set-state": 0, // nem kell
    "react/no-typos": 0,
    "react/no-string-refs": 2,
    "react/no-this-in-sfc": 0, // TODO
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/no-unsafe": 0, // TODO
    "react/no-unused-prop-types": 0, // a két known issue-ja miatt nem tudjuk használni.
    "react/no-unused-state": 0, // TODO
    "react/no-will-update-set-state": 0, // TODO
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 2,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 0, // mert a wp PluginProvide megoldja
    "react/require-default-props": 0, // TODO
    "react/require-optimization": 0, // ez egyelőre nem kell
    "react/require-render-return": 2,
    "react/self-closing-comp": 1,
    "react/sort-comp": 2,
    "react/sort-prop-types": 0, // nem látom értelmét
    "react/style-prop-object": 0, // no-react nem támogatja
    "react/void-dom-elements-no-children": 0, // TODO

    // JSX
    // https://www.npmjs.com/package/eslint-plugin-react#jsx-specific-rules

    "react/jsx-boolean-value": 1,
    "react/jsx-child-element-spacing": 0, // TODO
    "react/jsx-closing-bracket-location": [1, {"selfClosing": "line-aligned"}],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-curly-spacing": [1, "always"],
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-filename-extension": 2,
    "react/jsx-first-prop-new-line": 0, // nem látom értelmét
    "react/jsx-handler-names": [1, { "eventHandlerPrefix": "on", "eventHandlerPropPrefix": "on" }],
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-key": 0, // ez a mi esetünkben (jsx-render) értelmetlen
    "react/jsx-max-depth": 0, // TODO
    "react/jsx-max-props-per-line": [1, { "maximum": 5 }],
    "react/jsx-no-bind": [2, { "ignoreRefs": true }],
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0, // nem kell
    "react/jsx-no-target-blank": 0, // nem kell
    "react/jsx-no-undef": [1, {"allowGlobals": true}],
    "react/jsx-one-expression-per-line": 0, // TODO
    "react/jsx-curly-brace-presence": 0, // TODO
    "react/jsx-fragments": 0, // TODO
    "react/jsx-pascal-case": 2,
    "react/jsx-props-no-multi-spaces": 0, // TODO
    "react/jsx-sort-default-props": 0, // TODO
    "react/jsx-sort-props": 0, // nem kell
    "react/jsx-space-before-closing": 0, // TODO
    "react/jsx-tag-spacing": [1, {"closingSlash": "never"}],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": 2,
  }
}
