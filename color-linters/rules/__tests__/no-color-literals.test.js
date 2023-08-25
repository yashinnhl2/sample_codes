const { RuleTester } = require('eslint');
const rule = require('../no-color-literals');
const { toTest, toInvalid } = require('../../utils');

const ruleTester = new RuleTester();

const errors = [
  {
    message: 'Unexpected value. Color literals are not allowed'
  }
];

const invalid = toInvalid({ errors });

ruleTester.run('no-color-literals', rule, {
  valid: [
    { code: 'const StyledDiv = { color: "validColor" };' },
    { code: 'const text = "I like rgb colors";' },
    { code: 'const Promo = () => <Item label="Get a black card for free!" />;' },
    {
      code: `
        const Component = () => {
          const theme = useTheme();
          const { backgroundPrimary: backgroundColor } = theme.palette;
          return <div style={{ backgroundColor }} />;
        };
      `
    },
    {
      code: `
        const Box = styled.div\`
          background: \${({ theme }) => theme.palette.backgroundPrimary};
        \`;
      `
    },
    { code: 'const StyledDiv = { color: "#9900" };' },
    { code: 'const StyledDiv = { color: "1px solid #9900" };' },
    { code: 'const StyledDiv = { boxShadow: true ? theme.palette.actionablePrimary : "valid" };' },
    { code: 'const StyledDiv = { type: true ? theme.primary : "valid" };' },
    { code: 'const StyledDiv = { color: false };' },
    { code: 'const StyledDiv = { color: undefined };' },
    { code: 'const StyledDiv = { color: 234 };' },
    {
      code: `<Dot style={{
        backgroundColor: \`\${page === i ? theme.palette.actionablePrimary : theme.palette.backgroundStrong}\`
      }} />`
    }
  ].map(toTest),
  invalid: [
    { code: 'const StyledDiv = { color: "yellow" };' },
    { code: 'const StyledDiv = { color: "rgba(0,0,0,1)" };' },
    { code: 'const StyledDiv = { color: "hsla(302, 100%, 50%, 1)" };' },
    { code: 'const StyledDiv = { color: "primary" };' },
    { code: 'const StyledDiv = { color: "#fff" };' },
    { code: 'const StyledDiv = { borderColor: "1px solid red" };' },
    { code: 'const StyledDiv = { borderColor: "1px solid #ddd" };' },
    { code: 'const StyledDiv = { boxShadow: "1px 1px 0 #ABF113" };' },
    {
      code: `
        const Component = () => <div style={{ backgroundColor: '#fff' }} />;
      `
    },
    {
      code: `const typeProps = {
        [Types.primary]: {
          background: 'primary',
          text: 'contentReverse',
        }
      }
        `
    },
    {
      code: `const typeProps = {
        [Types.primary]: {
          background: \`1px solid \${theme.primaryUltraLight} \`,
        }
      }
        `
    },
    { code: 'const StyledDiv = { boxShadow: true ? "1px 1px 0 #dd" : "white" };' },
    { code: 'const StyledDiv = { boxShadow: true ? "1px solid #ddd" : "valid" };' },
    { code: 'const StyledDiv = { boxShadow: true ? theme.primary : "valid" };' },
    // eslint-disable-next-line no-template-curly-in-string
    { code: 'const StyledDiv = { boxShadow: true ? `1px solid ${theme.primary}` : "valid" };' },
    {
      code: "const button = styled.p.attrs({ border: '1px solid fuchsia' })`border-width: 1px`;"
    },
    {
      code: `const button = styled.div.attrs(
        props => ({ color: props.theme.textAreaBackground }))
        \`
         height: 200px;
         width: 300px;
      \``
    },
    {
      code: `const colors = {
        success: {
          background: 'semanticPositiveBackground',
          color: 'red'
        },
      }`
    },
    {
      code: `const typeProps = {
        [Types.primary]: {
          background: 'actionablePrimary',
          border: 'btnPrimaryBorder',
          text: 'contentReverse',
        }
      }
        `
    }
  ].map(invalid)
});
