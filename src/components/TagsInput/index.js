import React, { useState, useEffect } from 'react';
import nop from 'nop';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Tag,
  Icon,
  Input,
} from 'antd';

// import TagsInput from './TagsInput';
import styles from './TagsInput.module.css';

const TagsInput = ({
  newLabel,
  placeholder,
  value,
  onChange,
}) => {
  const inputRef = React.createRef();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  const maxCharacters = 35;

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
    if (inputValue) {
      const val = inputValue.trim();
      if (val && isNotDuplicated(val)) {
        onChange([...value, val]);
      }
    }
    hideInput();
  };

  return (
    <>
      {value.map((v) => {
        const isLongTag = v.length > maxCharacters;
        const tagElem = (
          <Tag
            closable
            key={v}
            onClose={() => handleTagClose(v)}
          >
            {isLongTag ? `${v.slice(0, maxCharacters)}...` : v}
          </Tag>
        );
        return isLongTag ? <Tooltip title={v} key={v}>{tagElem}</Tooltip> : tagElem;
      })}

      { !inputVisible && (
        <Tag
          className={styles.newTag}
          onClick={showInput}
        >
          <Icon
            className={styles.newIcon}
            type="plus"
          />
          {newLabel}
        </Tag>
      )}

      { inputVisible && (
        <Input
          type="text"
          ref={inputRef}
          placeholder={placeholder}
          className={styles.input}
          value={inputValue}
          onChange={handleChange}
          onBlur={addValue}
          onPressEnter={addValue}
        />
      )}
    </>
  );
};

TagsInput.propTypes = {
  newLabel: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

TagsInput.defaultProps = {
  newLabel: 'New',
  placeholder: '',
  value: [],
  onChange: nop,
};

export default TagsInput;
