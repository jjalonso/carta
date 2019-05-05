import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import nop from 'nop';
import classNames from 'classnames';
import BraftEditor, { EditorState } from 'braft-editor';
import 'braft-editor/dist/index.css';

import styles from './Editor.module.css';

const Editor = ({
  placeholder,
  contentClassName,
  value,
  onChange,
}) => {
  // ***************************
  // Workaround: https://github.com/margox/braft-editor/issues/238
  const isFirstEnter = useRef(false);

  useEffect(() => {
    isFirstEnter.current = true;
  }, []);

  const handleChange = (editorState) => {
    if (isFirstEnter.current) onChange(editorState);
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
        contentClassName={classNames([styles.content, contentClassName])}
        excludeControls={excludedControls}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Editor.propTypes = {
  placeholder: PropTypes.string,
  contentClassName: PropTypes.string,
  value: PropTypes.instanceOf(EditorState),
  onChange: PropTypes.func,
};

Editor.defaultProps = {
  placeholder: '',
  contentClassName: '',
  value: BraftEditor.createEditorState(),
  onChange: nop,
};

export default Editor;
