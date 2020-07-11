import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

interface ITheme {
  color?: (colorName: string) => string;
  fontSize?: (size: string) => string;
  fontFamily?: (family: string) => string;
  breakpoint?: (size: string) => string;
}

interface IBaseProps {
  family?: string;
  height?: string;
  weight?: string;
  color?: string;
  tag: string;
  size?: string;
  uppercase?: boolean;
  showLabel?: boolean;
  theme?: ITheme;
}

interface ITextProps extends IBaseProps {
  uppercase?: boolean;
}

/** Text renders different elements based on the `tag` prop
 *  Weight is checked for existence to prevent overriding the tag's css
 */
const BaseText: React.FC<IBaseProps> = ({
  tag,
  children,
  ...rest
}): JSX.Element => {
  const { uppercase, showLabel, ...validAttributes } = rest;
  return React.createElement(tag, validAttributes, children);
};

const Text = styled(BaseText)<ITextProps>`
  color: ${({ color, theme }) => (color ? theme?.color(color) : 'inherit')};
  font-size: ${({ size, theme }) => theme?.fontSize(size)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  font-weight: ${({ weight }) =>
    weight ? `font-weight: ${weight}` : 'normal'};
  font-family: ${({ family, theme }) =>
    family ? theme?.fontFamily(family) : 'inherit'};
  ${({ size, theme }) =>
    size === 'super'
      ? css`
          font-size: ${theme?.fontSize('xxl')};
          line-height: 3rem;
          @media ${theme.breakpoint('small')} {
            font-size: ${theme?.fontSize('big')};
            line-height: ${theme?.fontSize('big')};
            margin-bottom: 1rem;
          }
          @media ${theme.breakpoint('medium')} {
            font-size: ${theme?.fontSize('super')};
            line-height: ${theme?.fontSize('super')};
            margin-bottom: 1rem;
          }
        `
      : null};
`;

Text.defaultProps = {
  family: 'Montserrat',
  weight: 'normal',
  height: undefined,
  uppercase: false,
  color: 'inherit',
  tag: 'span',
  size: 's',
};

Text.propTypes = {
  /** Font family */
  family: PropTypes.string,
  /** Weight of Font */
  weight: PropTypes.string,
  /** Line height */
  height: PropTypes.string,
  /** Sets text transform to uppercase. */
  uppercase: PropTypes.bool,
  /** Colors */
  color: PropTypes.string,
  /** Tag type */
  tag: PropTypes.string.isRequired,
  /** Sizes */
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Text;
