import PropTypes from 'prop-types';

export const fieldType = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
};

export const fieldCheckboxType = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
