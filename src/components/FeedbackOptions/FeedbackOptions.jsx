import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <button
          key={item.name}
          name={item.name}
          type="button"
          onClick={event => onLeaveFeedback(event)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
