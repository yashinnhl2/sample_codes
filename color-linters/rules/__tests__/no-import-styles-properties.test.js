const { RuleTester } = require('eslint');
const rule = require('../no-import-styles-properties');
const { toTest, toInvalid } = require('../../utils');

const ruleTester = new RuleTester();

const errors = [
  {
    message:
      // eslint-disable-next-line no-template-curly-in-string
      'Do not use styles properties directly. Use useTheme in functional components and ${props => props.theme.someColor} in styled components'
  }
];

const invalid = toInvalid({ errors });

ruleTester.run('no-import-styles-properties', rule, {
  valid: [{ code: "import { GlobalStyles } from '@upgrade/styles'" }].map(toTest),
  invalid: [
    {
      code: "import { properties } from '@upgrade/styles'"
    },
    {
      code: "import { properties as p } from '@upgrade/styles'"
    },
    {
      code: "import { GlobalStyles, properties } from '@upgrade/styles'"
    }
  ].map(invalid)
});
