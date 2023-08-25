/* eslint-disable dot-notation */
/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';
import { isArray, isString, size as arraySize } from 'lodash-es';

const getMediaSize = (size, theme) => {
  if (size === 'xs') return theme.mediaXs;
  if (size === 'sm') return theme.mediaSm;
  if (size === 'md') return theme.mediaMd;

  return theme.mediaLg;
};

// This function will convert ['xs', 'md', 'xs' , 'sm'] to `0.25rem 1rem 0.25rem 0.5rem`
// based on array size, it will generate other shorthand syntaxes like vertical and horizontal spacing ['md', 'xs']
const generateShortHandSpacing = (value, theme) => {
  if (arraySize(value) > 4) throw Error('shorthand spacing cannot have more than 4 items');

  return value.reduce((acc, curr) => `${acc + theme.spacing[curr]} `, '');
};

const generateSpacing = ({ value, theme }) => {
  if (isArray(value, theme)) {
    return generateShortHandSpacing(value, theme);
  }

  return `${theme.spacing[value]}`;
};

const getValue = (value, size) => {
  if (isString(value) || isArray(value)) return value;

  return value[size];
};

const generateResponsiveTemplate = (value, cssProperty) => {
  if (!value) return '';

  return css`
    ${(value.xs || isString(value) || isArray(value)) &&
    css`
      ${[cssProperty]}: ${({ theme }) => generateSpacing({ value: getValue(value, 'xs'), theme })};
    `}

    ${value.sm &&
    css`
      @media (min-width: ${({ theme }) => getMediaSize('sm', theme)}) {
        ${[cssProperty]}: ${({ theme }) => generateSpacing({ value: getValue(value, 'sm'), theme })};
      } ;
    `}

    ${value.md &&
    css`
      @media (min-width: ${({ theme }) => getMediaSize('md', theme)}) {
        ${[cssProperty]}: ${({ theme }) => generateSpacing({ value: getValue(value, 'md'), theme })};
      } ;
    `}

    ${value.lg &&
    css`
      @media (min-width: ${({ theme }) => getMediaSize('lg', theme)}) {
        ${[cssProperty]}: ${({ theme }) => generateSpacing({ value: getValue(value, 'lg'), theme })};
      } ;
    `}
  `;
};

// MARGINS
const m = all => {
  return generateResponsiveTemplate(all, 'margin');
};

const mt = top => {
  return generateResponsiveTemplate(top, 'margin-top');
};

const mb = bottom => {
  return generateResponsiveTemplate(bottom, 'margin-bottom');
};

const mr = right => {
  return generateResponsiveTemplate(right, 'margin-right');
};

const ml = left => {
  return generateResponsiveTemplate(left, 'margin-left');
};

const mx = horizontal => {
  return css`
    ${mr(horizontal)};
    ${ml(horizontal)};
  `;
};

const my = vertical => {
  return css`
    ${mt(vertical)};
    ${mb(vertical)};
  `;
};

// PADDINGS
const p = all => {
  return generateResponsiveTemplate(all, 'padding');
};

const pt = top => {
  return generateResponsiveTemplate(top, 'padding-top');
};

const pb = bottom => {
  return generateResponsiveTemplate(bottom, 'padding-bottom');
};

const pr = right => {
  return generateResponsiveTemplate(right, 'padding-right');
};

const pl = left => {
  return generateResponsiveTemplate(left, 'padding-left');
};

const px = horizontal => {
  return css`
    ${pr(horizontal)};
    ${pl(horizontal)};
  `;
};

const py = vertical => {
  return css`
    ${pt(vertical)};
    ${pb(vertical)};
  `;
};

export const Sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
  '5xl': '5xl',
  '6xl': '6xl'
};

/**
 * Pre-defined sizes for margins and padding
 * @typedef {keyof Sizes} CoreSizes
 */

/**
 * An object property used to set properties on specific viewport sizes
 * @typedef {object} ViewportProps
 * @property {CoreSizes} xs - Extra small viewport margin
 * @property {CoreSizes} sm - Small viewport margin
 * @property {CoreSizes} md - Medium viewport margin
 * @property {CoreSizes} lg - Large viewport margin
 */

export { m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl };
