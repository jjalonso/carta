import BraftEditor from 'braft-editor';
import moment from 'moment';

// For development purpose!
// Filling forms is boring/depressive

export default {
  title: undefined,
  name: undefined,
  companion: [],
  place: 'clinic',
  date: moment(),
  conditions: [],
  medication: [],
  problems: [],
  country: undefined,
  emigrationYear: undefined,
  degree: undefined,
  isDegreeIncompleted: false,
  living: [],
  totalChildren: undefined,
  activities: BraftEditor.createEditorState(undefined),
  examination: BraftEditor.createEditorState(undefined),
  cognitive: [
    { domain: 'Attention', score: null, maxScore: null },
    { domain: 'Memory', score: null, maxScore: null },
    { domain: 'Fluency', score: null, maxScore: null },
    { domain: 'Language', score: null, maxScore: null },
    { domain: 'Visuospatial', score: null, maxScore: null },
  ],
  riskSelf: 1,
  riskOthers: 1,
  riskXtras: 1,
};
