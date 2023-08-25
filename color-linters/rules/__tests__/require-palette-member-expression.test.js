/* eslint-disable no-template-curly-in-string */
const { RuleTester } = require('eslint');
const rule = require('../require-palette-member-expression');
const { toTest, toInvalid } = require('../../utils');

const ruleTester = new RuleTester();

const errors = [
  {
    message: 'Unexpected value. This value is not a valid palette color'
  }
];

const invalid = toInvalid({ errors });

ruleTester.run('no-color-literals', rule, {
  valid: [
    { code: 'const StyledDiv = { color: theme.palette.semanticError };' },
    { code: 'const palette = { color: "valid" };' },
    // TODO, destructing now working for this rule, we need to improve that in future
    { code: 'const palette = { color: palette.yellow };' },
    { code: 'const { palette } = theme; const { yellow } = palette; const palette2 = { color: yellow };' },
    { code: 'groupColorsByPrefix(theme.palette, groups)' },
    { code: 'theme.palette[backgroundColor]' },
    { code: ' const { actionableSecondary } = theme.palette' },
    {
      code: `styled.div\`
    border-top: \${({ highlight, theme }) => (highlight ? \`3px solid \${theme.palette[highlight]}\` : 'auto')};
    \``
    },
    {
      code: `styled.div\`
      border-left: solid 1px \${({ 'data-color': color = 'border', theme }) => theme.palette[color] || color};
    \``
    },
    {
      code: `styled.div\`
      code: color: \${({ theme, type }) => theme.palette[colors[type]?.color]};
    \``
    }
  ].map(toTest),
  invalid: [
    { code: 'const StyledDiv = { color: theme.palette.iAmNotValid };' },
    { code: 'const StyledDiv = { color: theme.palette.pork };' },
    {
      code: `
    const button = styled.div.attrs(
      props => ({ color: props.theme.palette.textAreaBackground }))
      \`
       height: 200px;
       width: 300px;
      \``
    }
  ].map(invalid)
});
