/* eslint-disable max-len */
const { default: PROPERTIES } = require('../constants/properties');
const { default: PROHIBITED_COLORS } = require('../constants/prohibited-colors');
const { default: isHexColor } = require('../utilities/isHexColor');

function checkProperty(propertyName) {
  return propertyName && PROPERTIES.some((property) => property === propertyName);
}

function checkHexColorValue(value) {
  return value.split(/\s+/).some(isHexColor);
}

function checkValue(value) {
  if (typeof value !== 'string') return false;

  return PROHIBITED_COLORS.some((colorFormat) => value?.includes(colorFormat)) || checkHexColorValue(value);
}

function checkAlternateValues(expressionValue) {
  return checkValue(expressionValue?.alternate?.property?.name) || checkValue(expressionValue?.alternate?.value);
}

function checkConsequentValues(expressionValue) {
  return checkValue(expressionValue?.consequent?.property?.name) || checkValue(expressionValue?.consequent?.value);
}

module.exports = {
  create(context) {
    return {
      JSXElement(node) {
        if (!node) return;

        const attributes = node?.openingElement?.attributes || [];
        attributes.forEach((attr) => {
          const property = attr?.name?.name;
          const expressionValue = attr?.value?.expression;
          const value = attr?.value?.value || expressionValue?.property?.name;

          if (checkProperty(property) && (checkValue(value) || checkAlternateValues(expressionValue) || checkConsequentValues(expressionValue))) {
            context.report({
              node: attr,
              loc: attr?.loc,
              message: 'Unexpected value. Color literals are not allowed as JSX values. Use palette colors instead.'
            });
          }
        });
      }
    };
  }
};
