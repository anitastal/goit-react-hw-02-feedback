import PropTypes from 'prop-types';

export const FeedbackOptions = ({ optionsArr, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(optionsArr).map(item => (
        <button
          key={item}
          name={item}
          type="button"
          onClick={event => onLeaveFeedback(event)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.protoTypes = {
  optionsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
