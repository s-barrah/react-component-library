import * as React from 'react';
import * as PropTypes from 'prop-types';

// Components
import Text from '../../Atoms/Text/Text';
import RichText from '../../Atoms/RichText/RichText';

interface IProps {
  title: string;
  titleFamily?: string;
  titleTag: string;
  titleSize?: string;
  titleWeight?: string;
  titleColor?: string;
  uppercase?: boolean;
  bodyAlign?: string;
  content: string;
}

const Section: React.FC<IProps> = ({
  title = '',
  titleTag = 'h1',
  titleFamily,
  titleSize,
  titleWeight,
  titleColor,
  uppercase,
  bodyAlign,
  content = '',
}) => {
  return (
    <>
      <Text
        tag={titleTag}
        family={titleFamily}
        size={titleSize}
        weight={titleWeight}
        uppercase={uppercase}
        color={titleColor}
      >
        {title}
      </Text>
      <RichText align={bodyAlign} markup={content} />
    </>
  );
};

Section.defaultProps = {
  titleFamily: 'Montserrat',
  titleWeight: 'normal',
  uppercase: false,
  titleColor: 'inherit',
  titleSize: 'l',
  bodyAlign: 'left',
};

Section.propTypes = {
  /** Section Title */
  title: PropTypes.string.isRequired,
  /** Title Font family */
  titleFamily: PropTypes.string,
  /** Title Weight of Font */
  titleWeight: PropTypes.string,
  /** Title text transform to uppercase. */
  uppercase: PropTypes.bool,
  /** Title Colors */
  titleColor: PropTypes.string,
  /** Title Tag type */
  titleTag: PropTypes.string.isRequired,
  /** Title Size */
  titleSize: PropTypes.string,
  /** Section alignment */
  bodyAlign: PropTypes.string,
  /** Section content */
  content: PropTypes.string.isRequired,
};

export default Section;
