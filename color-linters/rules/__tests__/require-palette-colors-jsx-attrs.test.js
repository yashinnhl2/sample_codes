const { RuleTester } = require('eslint');
const rule = require('../require-palette-colors-jsx-attrs');
const { toTest, toInvalid } = require('../../utils');

const ruleTester = new RuleTester();

const errors = [
  {
    message: 'Unexpected value. Color literals are not allowed as JSX values. Use palette colors instead.'
  }
];

const invalid = toInvalid({ errors });

ruleTester.run('require-palette-colors-jsx-attrs', rule, {
  valid: [
    { code: 'const StyledDiv = { color: "validColor" };' },
    { code: 'const StyledDiv = null' },
    { code: '<p name="red"></p>' },
    { code: '<p color="false"></p>' },
    { code: '<p color={false}></p>' },
    { code: '<p color={undefined}></p>' },
    { code: '<p color={"red"}></p>' },
    { code: '<path fill={true ? theme.palette.backgroundPrimary : theme.palette.actionablePrimary} />' },
    { code: 'const Promo = () => <Item label="Get a black card for free!" />;' }
  ].map(toTest),
  invalid: [
    { code: '<p color="blue"></p>' },
    { code: '<p color={theme.linkColor}></p>' },
    { code: '<p color="linkColor"></p>' },
    { code: '<CloseIcon data-color="slateDark" onClick={() => tooltipRef.current.hide()} />' },
    { code: '<Logo name={theme.name} direction="vertical" color="lightblue" />' },
    { code: '<path fill="#3F465E" d="M1" />' },
    { code: '<Comp border-color="1px solid #3F465E" />' },
    { code: '<path fill="none" stroke={theme.primary} />' },
    { code: '<path stroke={true ? theme.primary : theme.palette.actionablePrimary} />' },
    { code: '<path stroke={true ? theme.palette.actionablePrimary  : theme.red } />' },
    { code: '<path stroke={true ? "#fff"  : "valid" } />' },
    { code: '<div borderColor={true ?  "valid" : "1px solid red" } />' },
    { code: '<div borderColor={true ?  "valid" : "rgba(0,0,0)" } />' },
    { code: '<path colorHover={true ? theme.primary : theme.palette.actionablePrimary} />' },
    { code: '<path labelColor="warning" />' }
  ].map(invalid)
});
