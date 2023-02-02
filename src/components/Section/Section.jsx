import PropTypes from 'prop-types';
import { Block } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <Block>
      <h2>{title}</h2>
      {children}
    </Block>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
