// https://github.com/pugjs/pug-lint#configuration-file
// https://github.com/pugjs/pug-lint/blob/master/docs/rules.md

module.exports = {
  disallowAttributeConcatenation: true,
  disallowAttributeInterpolation: true,
  // disallowAttributeTemplateString: false,
  disallowBlockExpansion: true,
  disallowClassAttributeWithStaticValue: true,
  // disallowClassLiteralsBeforeAttributes: false,
  disallowClassLiteralsBeforeIdLiterals: true,
  // disallowClassLiterals: false,
  disallowDuplicateAttributes: true,
  disallowHtmlText: true,
  disallowIdAttributeWithStaticValue: true,
  // disallowIdLiteralsBeforeAttributes: false,
  // disallowIdLiterals: false,
  disallowLegacyMixinCall: true,
  disallowMultipleLineBreaks: true,
  disallowSpaceAfterCodeOperator: true,
  // disallowSpacesInsideAttributeBrackets: true, // TODO: ezt nem értem miért nem jó a multiline attrs-nál
  // disallowSpecificAttributes: false,
  // disallowSpecificTags: false,
  disallowStringConcatenation: true,
  // disallowStringInterpolation: false,
  disallowTagInterpolation: true,
  disallowTemplateString: true,
  disallowTrailingSpaces: true,
  // maximumLineLength: 100, // TODO: speciális eseteket nem tudom hogyan kell kezelni
  maximumNumberOfLines: 100,
  requireClassLiteralsBeforeAttributes: true,
  // requireClassLiteralsBeforeIdLiterals: false,
  requireIdLiteralsBeforeAttributes: true,
  requireLineFeedAtFileEnd: true,
  requireLowerCaseAttributes: true,
  requireLowerCaseTags: true,
  // requireSpaceAfterCodeOperator: false,
  // requireSpacesInsideAttributeBrackets: true,
  requireSpecificAttributes: [{ img: [ 'alt' ] }], // TODO: data-src
  requireStrictEqualityOperators: true,
  validateAttributeQuoteMarks: "'",
  /*
  validateAttributeSeparator: {
    separator: " ",
    multiLineSeparator: "\n "
  },
  */
  validateDivTags: true,
  validateExtensions: true,
  validateIndentation: 2,
  // validateLineBreaks: 'CRLF',
  validateSelfClosingTags: true,
  validateTemplateString: true
}
