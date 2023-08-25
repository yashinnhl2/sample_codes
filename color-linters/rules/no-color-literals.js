/* eslint-disable default-param-last */
/* eslint-disable max-len */
const { default: PROHIBITED_COLORS } = require('../constants/prohibited-colors');
const { default: PROPERTIES } = require('../constants/properties');
const { default: isHexColor } = require('../utilities/isHexColor');

function reportError(node, context) {
  context.report({
    node,
    loc: node?.loc,
    message: 'Unexpected value. Color literals are not allowed'
  });
}

function checkProperties(propertyName) {
  return propertyName && PROPERTIES.some((property) => property === propertyName);
}

function checkHexColorValue(value) {
  return value.split(/\s+/).some(isHexColor);
}

function checkValues(value) {
  if (typeof value !== 'string') return false;

  return PROHIBITED_COLORS.some((colorFormat) => value?.toString()?.includes(colorFormat)) || checkHexColorValue(value);
}

function checkTemplateLiteralsInterpolatedValues(value = {}, context) {
  if (!value?.expressions?.length) return;

  value?.expressions?.forEach((item) => {
    const propertyName = item?.property?.name;

    if (checkValues(propertyName)) {
      reportError(item, context);
    }
  });
}

function validateTernaries(value = {}, context) {
  if (value?.type === 'Literal' && checkValues(value?.value)) {
    reportError(value, context);
  }

  if (value?.type === 'MemberExpression' && checkValues(value?.property?.name)) {
    reportError(value, context);
  }

  if (value?.type === 'TemplateLiteral') {
    checkTemplateLiteralsInterpolatedValues(value, context);
  }
}

function checkTernaryValues(value, context) {
  if (!value?.alternate || !value?.consequent) return;

  validateTernaries(value?.alternate, context);

  validateTernaries(value?.consequent, context);
}

module.exports = {
  create(context) {
    return {
      Property(node) {
        if (!node || !node?.key || !node?.value) return;

        const colorPropertyMatched = checkProperties(node?.key?.name);

        if (!colorPropertyMatched) return;

        const valueHasColorLiterals = checkValues(node?.value?.value || node?.value?.property?.name);

        if (valueHasColorLiterals) {
          reportError(node, context);
        }

        checkTemplateLiteralsInterpolatedValues(node?.value, context);
        checkTernaryValues(node?.value, context);
      }
    };
  }
};
