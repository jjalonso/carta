import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';


const CompanyWidget = ({
  value,
  onChange,
}) => {
  const handleChange = (v, opt) => {
    const lastOpt = opt[opt.length - 1];
    if (lastOpt && lastOpt.key) {
      const newState = [...v];
      newState.push(`${newState.pop()} (Clinic worker)`);
      onChange(newState);
    } else {
      onChange(v);
    }
  };

  return (
    <Select
      mode="tags"
      placeholder="Select company"
      onChange={handleChange}
      value={value}
    >
      <Select.Option value="husband">Husband</Select.Option>
      <Select.Option value="wife">Wife</Select.Option>
      <Select.Option value="partner">Partner</Select.Option>
      <Select.Option value="daughter">Daughter</Select.Option>
      <Select.Option value="son">Son</Select.Option>
      <Select.Option value="mother">Mother</Select.Option>
      <Select.Option value="father">Father</Select.Option>
      <Select.Option value="friend">Friend</Select.Option>
      <Select.Option value="cousin">Cousin</Select.Option>
      <Select.Option value="uncle">Uncle</Select.Option>
      <Select.Option value="aunt">Aunt</Select.Option>
    </Select>
  );
};

CompanyWidget.propTypes = {
  value: PropTypes.arrayOf(String),
  onChange: PropTypes.func,
};

CompanyWidget.defaultProps = {
  value: [],
  onChange: () => {},
};

export default CompanyWidget;
