import React from 'react';
import PropTypes from 'prop-types';
import BraftEditor, { EditorState } from 'braft-editor';
import 'braft-editor/dist/index.css';

import styles from './Editor.module.css';

const Editor = ({
  onChange,
  value,
  placeholder,
  contentClassName,
}) => {
  const handleChange = editorState => onChange(editorState);
  const excludedControls = [
    'undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing',
    'separator', 'text-color', 'strike-through', 'superscript', 'subscript',
    'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align',
    'separator', 'headings', 'blockquote', 'code', 'separator', 'link',
    'separator', 'hr', 'separator', 'media', 'separator', 'clear',
  ];

  return (
    <div className={styles.editor}>
      <BraftEditor
        language="en"
        contentClassName={`${contentClassName} ${styles.content}`}
        excludeControls={excludedControls}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(EditorState),
  placeholder: PropTypes.string,
  contentClassName: PropTypes.string,
};

Editor.defaultProps = {
  onChange: () => {},
  value: BraftEditor.createEditorState(null),
  contentClassName: '',
  placeholder: '',
};

export default Editor;
