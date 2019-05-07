import BraftEditor, { EditorState } from 'braft-editor';
import isHtml from 'is-html';

export const serialise = (data) => {
  const json = {};
  Object.entries(data).forEach((entry) => {
    const [key, value] = entry;
    // TODO: Sanitize value
    // EditorState > string
    json[key] = value instanceof EditorState ? value.toHTML() : value;
  });
  return json;
};

export const deserialise = (json) => {
  const data = {};
  Object.entries(json).forEach((entry) => {
    const [key, value] = entry;
    // string > EditorState
    data[key] = isHtml(value) ? BraftEditor.createEditorState(value) : value;
  });
  return data;
};
