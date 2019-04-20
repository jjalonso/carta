import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import nop from 'nop';
import {
  Tag,
  Tooltip,
  Icon,
  Select,
} from 'antd';

import styles from './TagsSelect.module.css';

const TagsSelect = ({
  className,
  newLabel,
  placeholder,
  choices,
  value,
  loading,
  onHideInput,
  onSearch,
  onChange,
}) => {
  const inputRef = React.createRef();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.rcSelect.getInputDOMNode().click();
    }
  }, [inputVisible]);

  const maxCharacters = 35;
  const showInput = () => setInputVisible(true);
  const isNotInValues = v => value
    .findIndex(str => str.toLowerCase() === v.toLowerCase()) === -1;

  const handleTagClose = (removedTag) => {
    const newValue = value.filter(tag => tag !== removedTag);
    onChange(newValue);
  };

  const hideInput = () => {
    onHideInput();
    setInputState(undefined);
    setInputVisible(false);
  };

  const addValue = (v) => {
    if (v) {
      const val = v.trim();
      if (val && isNotInValues(val)) {
        onChange([...value, val]);
      }
    }
    hideInput();
  };

  const handleBlur = () => {
    addValue(inputState);
  };

  const handleChange = (v) => {
    addValue(v);
  };

  const handleTyping = (v) => {
    setInputState(v);
    onSearch(v);
  };

  let filtered = choices.filter(c => isNotInValues(c));
  if (inputState) {
    filtered = filtered.filter(c => c.toLowerCase() !== inputState.toLowerCase());
    filtered.unshift(inputState);
  }

  return (
    <>
      { value.map((v) => {
        const isLongTag = v.length > maxCharacters;
        const tagElem = (
          <Tag
            closable
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
        <Select
          showSearch
          loading={loading}
          ref={inputRef}
          className={`${className} ${styles.input}`}
          placeholder={placeholder}
          value={inputState}
          onBlur={handleBlur}
          onSelect={handleChange}
          dropdownMatchSelectWidth={false}
          onSearch={handleTyping}
        >
          { filtered.map(v => <Select.Option key={v} value={v}>{v}</Select.Option>) }
        </Select>
      )}
    </>
  );
};

TagsSelect.propTypes = {
  className: PropTypes.string,
  newLabel: PropTypes.string,
  placeholder: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
  onHideInput: PropTypes.func,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
};

TagsSelect.defaultProps = {
  className: '',
  newLabel: 'New',
  placeholder: '',
  choices: [],
  value: [],
  loading: false,
  onHideInput: nop,
  onSearch: nop,
  onChange: nop,
};

export default TagsSelect;
