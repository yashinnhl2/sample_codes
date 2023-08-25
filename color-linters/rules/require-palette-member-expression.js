const { default: VALID_PALETTE } = require('../constants/valid-palette');

module.exports = {
  create(context) {
    return {
      MemberExpression(node) {
        if (!node) return;

        if (node?.property?.name === 'palette') {
          const propertyName = node?.parent?.property?.name;
          const isComputed = node?.parent?.computed; // computed e.g.theme.platte[]
          if (propertyName && !isComputed && !VALID_PALETTE.includes(propertyName)) {
            context.report({
              node,
              loc: node?.loc,
              message: 'Unexpected value. This value is not a valid palette color'
            });
          }
        }
      }
    };
  }
};
