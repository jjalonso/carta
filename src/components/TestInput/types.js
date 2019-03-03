import PropTypes from 'prop-types';

export const valueType = PropTypes.arrayOf(
  PropTypes.shape({
    domain: PropTypes.string,
    score: PropTypes.number,
    maxScore: PropTypes.number,
  }),
)