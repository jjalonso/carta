import React from 'react';
import {
  Input,
  Tag,
  Tooltip,
  Icon,
} from 'antd';

import styles from './TagsInput.module.css';

const TagsInput = ({
  newLabel,
  maxCharacters,
  placeholder,
  inputVisible,
  value,
  inputRef,
  inputValue,
  onChange,
  addValue,
  showInput,
  handleTagClose,
}) => (
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
        onChange={onChange}
        onBlur={addValue}
        onPressEnter={addValue}
      />
    )}
  </>
);

// TagsInput.propTypes = {
//   maxCharacters: PropTypes.number,
//   newLabel: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.arrayOf(PropTypes.string),
//   onChange: PropTypes.func,
// };

// TagsInput.defaultProps = {
//   maxCharacters: 35,
//   newLabel: 'New',
//   placeholder: '',
//   value: [],
//   onChange: () => {},
// };

export default TagsInput;
