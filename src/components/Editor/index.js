import React, { useEffect } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

import styles from './Editor.module.css';

const Editor = ({
  onChange,
  value,
  placeholder,
  contentClassName,
}) => {
  // ***************************
  // Workaround: https://github.com/margox/braft-editor/issues/238
  let isFirstEnter;

  useEffect(() => {
    isFirstEnter = true;
  }, []);

  const handleChange = (editorState) => {
    if (!isFirstEnter) onChange(editorState);
  };
  // ***************************

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
        triggerChangeOnMount={false}
        contentClassName={`${contentClassName} ${styles.content}`}
        excludeControls={excludedControls}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
