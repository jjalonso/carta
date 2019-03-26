import React from 'react';
import RiskWidget from './RiskWidget';

const RiskWidgetContainer = ({
  value,
  onChange,
}) => {
  const formatter = (v) => {
    switch (v) {
      case 1:
        return 'Low';
      case 2:
        return 'Medium';
      default:
        return 'High';
    }
  };

  return (
    <RiskWidget
      value={value}
      onChange={onChange}
      tipFormatter={formatter}
    />
  );
};

// RiskWidgetContainer.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func,
// };

// RiskWidgetContainer.defaultProps = {
//   value: PropTypes.number,
//   onChange: () => {},
// };

export default RiskWidgetContainer;
