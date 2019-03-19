import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Tag,
  Tooltip,
  Icon,
} from 'antd';

import styles from './TagsInput.module.css';

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

  const handleTyping = (e) => {
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
    <>
      {value.map((v) => {
        const isLongTag = v.length > maxCharacters;
        const tagElem = (
          <Tag
            closable
            className={styles.tag}
            key={v}
            afterClose={() => handleTagClose(v)}
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
          onChange={handleTyping}
          onBlur={addValue}
          onPressEnter={addValue}
        />
      )}
    </>
  );
};

TagsInputContainer.propTypes = {
  maxCharacters: PropTypes.number,
  newLabel: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

TagsInputContainer.defaultProps = {
  maxCharacters: 35,
  newLabel: 'New',
  placeholder: '',
  value: [],
  onChange: () => {},
};

export default TagsInputContainer;
