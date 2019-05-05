import BraftEditor from 'braft-editor';

// Not the best way but...
const htmlFields = ['other', 'examination', 'cognitiveConclusion', 'risksConclusion', 'carePlan', 'impression'];

export const serialise = (data) => {
  const json = {};
  Object.entries(data).forEach((entry) => {
    const [key, value] = entry;
    // TODO: Sanitize value
    // EditorState > string
    json[key] = htmlFields.includes(key) ? value.toHTML() : value;
  });
  return json;
};

export const deserialise = (json) => {
  const data = {};
  Object.entries(json).forEach((entry) => {
    const [key, value] = entry;
    // string > EditorState
    data[key] = htmlFields.includes(key) ? BraftEditor.createEditorState(value) : value;
  });
  return data;
};
