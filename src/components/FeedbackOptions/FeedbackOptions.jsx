import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(name => (
    <Button
      key={name}
      onClick={() => {
        onLeaveFeedback(name);
      }}
      type="button"
    >
      {name}
    </Button>
  ));

  return <>{buttons}</>;
};

FeedbackOptions.defauitProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
