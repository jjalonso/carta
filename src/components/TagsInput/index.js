import React, { useState, useEffect } from 'react';

import TagsInput from './TagsInput';

const TagsInputContainer = ({
  newLabel,
  maxCharacters,
  placeholder,
  value,
  onChange,
}) => {
  const inputRef = React.createRef();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState();
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  const isNotDuplicated = v => value.findIndex(
    str => str.toLowerCase() === v.toLowerCase(),
  ) === -1;

  const handleTagClose = (removedTag) => {
    const newValue = value.filter(tag => tag !== removedTag);
    onChange(newValue);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const hideInput = () => {
    setInputValue(undefined);
    setInputVisible(false);
  };

  const addValue = () => {
    if (inputValue && isNotDuplicated(inputValue)) {
      onChange([...value, inputValue]);
    }
    hideInput();
  };

  return (
    <TagsInput
      newLabel={newLabel}
      maxCharacters={maxCharacters}
      placeholder={placeholder}
      inputVisible={inputVisible}
      value={value}
      inputRef={inputRef}
      inputValue={inputValue}
      onChange={handleChange}
      addValue={addValue}
      showInput={showInput}
      handleTagClose={handleTagClose}
    />
  );
};

// TagsInputContainer.propTypes = {
//   maxCharacters: PropTypes.number,
//   newLabel: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.arrayOf(PropTypes.string),
//   onChange: PropTypes.func,
// };

// TagsInputContainer.defaultProps = {
//   maxCharacters: 35,
//   newLabel: 'New',
//   placeholder: '',
//   value: [],
//   onChange: () => {},
// };

export default TagsInputContainer;
