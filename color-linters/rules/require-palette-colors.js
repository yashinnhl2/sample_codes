/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
const { default: PROHIBITED_COLORS } = require('../constants/prohibited-colors');
const { default: isHexColor } = require('../utilities/isHexColor');

function checkStyledDefined(node) {
  return (
    node?.tag?.object?.name === 'styled' ||
    node?.tag?.callee?.name === 'styled' ||
    node?.tag?.callee?.property?.name === 'attrs' ||
    node?.tag?.name === 'css' ||
    node?.tag?.name === 'createGlobalStyle'
  );
}

function throwError(node, context) {
  context.report({
    node,
    loc: node?.loc,
    message: 'Using hex, rgb(a) or color names code is not allowed. Use theme.palette from upgrade theme.'
  });
}

function checkHexColorValue(hexColorValue) {
  return hexColorValue.split(/\s+/).some(isHexColor);
}

function isValueProhibited(colorValue) {
  if (typeof colorValue !== 'string') return false;

  return PROHIBITED_COLORS.some((colorFormat) => colorValue === colorFormat) || checkHexColorValue(colorValue);
}

function checkAlternatesValues(alternateValue = {}) {
  return isValueProhibited(alternateValue?.value) || isValueProhibited(alternateValue?.property?.name);
}

function checkConsequentValues(consequentValue = {}) {
  return isValueProhibited(consequentValue?.value) || isValueProhibited(consequentValue?.property?.name);
}

function checkExpressions(node, context) {
  const expressions = node?.quasi?.expressions || [];

  expressions.forEach((expression) => {
    const value = expression?.body?.property?.name;

    if (
      isValueProhibited(value) ||
      checkConsequentValues(expression?.body?.consequent) ||
      checkAlternatesValues(expression?.body?.alternate)
    ) {
      throwError(expression, context);
    }
  });
}

function formatValues(val = '') {
  return val.trim();
}

function checkQuasis(node, context) {
  const quasis = node?.quasi?.quasis || [];

  quasis.forEach((quasi) => {
    const tokenLines = quasi?.value?.raw?.split('\n');
    const templateTokensArray = [];
    let startColumnPosition = quasi?.range[0];
    const startLinePosition = quasi?.loc?.start?.line;

    tokenLines.forEach((line, i) => {
      const cssPropValue = line.split(':');
      templateTokensArray.push({
        property: cssPropValue.length > 1 ? formatValues(cssPropValue[0]) : '',
        value: cssPropValue.length > 1 ? formatValues(cssPropValue[1]) : formatValues(cssPropValue[0]),
        loc: {
          start: {
            line: startLinePosition + i,
            column: startColumnPosition
          },
          end: {
            line: startLinePosition + i,
            column: startColumnPosition + line.length
          }
        }
      });
      // new line starts from position - column 0
      startColumnPosition = 0;
    });

    templateTokensArray.forEach((token) => {
      const values = token?.value?.split(/[()\s;`'"]/) || [];
      values.forEach((val) => {
        if (isValueProhibited(val)) {
          throwError(token, context);
        }
      });
    });
  });
}

module.exports = {
  create(context) {
    return {
      TaggedTemplateExpression(node) {
        if (!node || !checkStyledDefined(node)) return;

        checkExpressions(node, context);
        checkQuasis(node, context);
      }
    };
  }
};
