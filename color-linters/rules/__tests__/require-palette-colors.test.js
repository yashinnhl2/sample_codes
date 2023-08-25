/* eslint-disable no-template-curly-in-string */
const { RuleTester } = require('eslint');
const rule = require('../require-palette-colors');
const { toTest, toInvalid } = require('../../utils');

const ruleTester = new RuleTester();

const errors = [
  {
    message: 'Using hex, rgb(a) or color names code is not allowed. Use theme.palette from upgrade theme.'
  }
];

const invalid = toInvalid({ errors });

ruleTester.run('require-palette-colors', rule, {
  valid: [
    {
      code: 'const red = undefined'
    },
    {
      code: 'const red = false'
    },
    {
      code: 'const red = someValue.div`color: "black"`'
    },
    {
      code: 'const red = styled.div`border-color: `;'
    },
    {
      code: 'const red = styled.div`border-color: validColor`;'
    },
    {
      code: 'const blueName = styled.div`color: ${(props) => props.theme.primary2 }`;'
    },
    {
      code: `export const ConditionsWrapper = styled.div\`
      width: 100%;
      margin: 0 auto;
      & span {
        color: \${({theme}) => theme.palette.semanticInfo}
      }
      @media (min-width: \${props => props.theme.mediaXs}){
        width: 100%;
      }
      \`;`
    },
    {
      code: `
        const Box = styled.div\`
          background: \${({ theme }) => theme.palette.contentDisabled};
        \`;
      `
    },
    {
      code: 'export const CompactPromoButton = styled(PromoButton)`@media (min-width: ${props => props.theme.mediaSm}) {min-width: 80%;white-space: normal;}`;'
    },
    {
      code: 'const button = css`border-color: 1px solid ${({theme}) => theme.btnSecondaryBorderActive2};`'
    },
    {
      code: "export const global = createGlobalStyle` body { color: 'semanticPositive';}`;"
    },
    {
      code: `
      import styled from 'styled-components';
      const n = {
        'container-border-primary': type === 'primary',
        'container-border-light': type === 'neutral'
      }`
    },
    {
      code: `
      import styled from 'styled-components';
      import { Container } from '@upgrade/react-components/TextInput/styles';

      export const FormContainer = styled.div\`
        & > div {
          padding: 0;
          & > div:nth-child(1) {
            padding: 0.5rem;
          }
        }
      \`;

        export const StyledContainer = styled(Container)\`
          margin-bottom: 0.5rem;
          border: \${({ theme }) => theme.textInputBorder};
          padding: 0;
        \`;
      `
    },
    { code: 'const text = "I like rgb colors";' },
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
          background: \${props => props.theme.btnBorderRadius};
        \`;
      `
    },
    {
      code: `
      import styled from 'styled-components';
      const isDarkColor = bgColor => {
      const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);

      return r * 0.299 + g * 0.587 + b * 0.114 < 186;
    };`
    },
    {
      code: `
        const Box = styled.div\`
        color: \${({ 'data-type': type, theme }) => theme.palette[typeProps[type].text]};
        \`;
      `
    },
    {
      code: `const colors = {
        success: {
          background: 'semanticPositiveBackground',
          color: 'semanticPositiveText'
        },
      }`
    },
    {
      code: `
      import styled from 'styled-components';
      const getBackgroundColor = ({ error, focused, transparent, theme }) => {
        if (transparent) return 'transparent';
        if (focused) return theme.palette.backgroundPrimary;
        return error ? theme.palette.semanticErrorBackground : theme.palette.backgroundPrimary;
      };
      `
    },
    {
      code: "export const styleGlobal = createGlobalStyle` body { white: 'valid'; }`;"
    }
  ].map(toTest),
  invalid: [
    {
      code: 'const StyleDIV = styled.div`color: blue`'
    },
    {
      code: `export const ConditionsWrapper = styled.div\`
      width: 100%;
      border: 1px solid valid;
      color: red;
      & span {
        color: \${({theme}) => theme.palette.semanticInfo}
      }
      @media (min-width: \${props => props.theme.mediaXs}){
        width: 100%;
      }
      \`;`
    },
    {
      code: 'const StyleDIV = styled.div`border: 1px solid #dddddd;`'
    },
    {
      code: 'const button = styled.button`color: rgba(0, 0 , 0, 1)`;'
    },
    {
      code: 'const button = styled.button`color: hsla(255, 100% , 82%, 1)`'
    },
    {
      code: 'const pageStyles = styled.div`background-color: ${({theme}) => theme.color}; border: 1px solid darkolivegreen;border-top: 1px solid ${({theme}) => theme.color};`'
    },
    {
      code: 'const button = styled(Button)`color: #fff; background: red; border: 1px solid yellow`'
    },
    {
      code: 'const button = css`border-color: 1px solid ${({theme}) => theme.btnSecondaryTextColorActive};`'
    },
    {
      code: `const button = styled.button\`
        color: \${({ isBlue }) => (isBlue ? "correct" : "deepskyblue")};
        height: 200px;
        width: 300px;\``
    },
    {
      code: `const button = styled.button\`
        color: \${({ isBlue }) => (isBlue ? "deepskyblue" : "correct")};
        height: 200px;
        width: 300px;\``
    },
    {
      code: `const button = styled.button\`
        color: \${({ theme }) => (true ? theme.palette.semanticError : theme.primary)};
      \``
    },
    {
      code: `const button = styled.button\`
        color: \${({ theme }) => (true ? theme.error : theme.semanticError)};
      \``
    },
    {
      code: "export const styleGlobal = createGlobalStyle` body { color: 'white'; }`;"
    },
    {
      code: `
        const Box = styled.div\`
          background: #ffffff;
        \`;
      `
    },
    {
      code: `
        const Box = styled(Label).attrs({ sth: '1' })\`
          background: #ffffff;
        \`;
      `
    },
    {
      code: `
        const Box = styled.div.attrs({ sth: '1' })\`
          background: red;
        \`;
      `
    },
    {
      code: `
        const Box = styled.select.attrs(({ disabled, error, floatingActive } = {}) => ({
          'aria-disabled': disabled || undefined,
          'data-error': error || undefined,
          'data-floating-active': floatingActive || undefined
        }))\`
          background: yellow;
        \`;
      `
    },
    {
      code: `
        const Box = styled.div.attrs({ sth: '1' })\`
          labelColor: red;
        \`;
      `
    }
  ].map(invalid)
});
