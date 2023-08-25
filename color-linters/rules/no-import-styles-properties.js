module.exports = {
  create(context) {
    return {
      ImportDeclaration(node) {
        const { source, specifiers } = node;

        if (source.value === '@upgrade/styles') {
          (specifiers || []).forEach(({ loc, imported: { name } = {} }) => {
            if (name === 'properties') {
              return context.report({
                node,
                loc,
                message:
                  // eslint-disable-next-line no-template-curly-in-string
                  'Do not use styles properties directly. Use useTheme in functional components and ${props => props.theme.someColor} in styled components'
              });
            }
            return null;
          });
        }
      }
    };
  }
};
