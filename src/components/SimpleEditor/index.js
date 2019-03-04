import React from 'react';
import PropTypes from 'prop-types';
import BraftEditor, { EditorState } from 'braft-editor';
import 'braft-editor/dist/index.css';

import styles from './SimpleEditor.module.css';

const SimpleEditor = ({
  onChange,
  value,
  placeholder,
  contentClassName,
}) => {
  const excludedControls = [
    'undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing',
    'separator', 'text-color', 'strike-through', 'superscript', 'subscript',
    'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align',
    'separator', 'headings', 'blockquote', 'code', 'separator', 'link',
    'separator', 'hr', 'separator', 'media', 'separator', 'clear',
  ];

  return (
    <div className={styles.simpleEditor}>
      <BraftEditor
        language="en"
        fontSizes={[12]}
        contentClassName={contentClassName}
        excludeControls={excludedControls}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SimpleEditor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(EditorState),
  placeholder: PropTypes.string,
  contentClassName: PropTypes.string,
};

SimpleEditor.defaultProps = {
  onChange: () => {},
  value: BraftEditor.createEditorState(),
  contentClassName: '',
  placeholder: '',
};

export default SimpleEditor;
