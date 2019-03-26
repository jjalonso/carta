import BraftEditor from 'braft-editor';
import moment from 'moment';

// For development purpose!
// Filling forms is boring/depressive

export default {
  title: 'Mr',
  name: 'Juan',
  companion: ['Wife'],
  place: 'clinic',
  date: moment(),
  conditions: ['Diabetes type I'],
  medication: ['Accu-Check Mobile cassete', 'Novorapid Insuline'],
  problems: ['Insomnio', 'Loosing items'],
  country: 'Spain',
  emigrationYear: '1987',
  degree: 'Mental Health Nursing',
  isDegreeIncompleted: true,
  living: ['Superman'],
  totalChildren: '3',
  activities: BraftEditor.createEditorState('<p>Cositas varias</p>'),
  examination: BraftEditor.createEditorState('<p>Lo examinanos</p>'),
  cognitive: [
    { domain: 'Attention', score: 18, maxScore: 20 },
    { domain: 'Memory', score: 8, maxScore: 20 },
    { domain: 'Fluency', score: 5, maxScore: 20 },
    { domain: 'Language', score: 12, maxScore: 20 },
    { domain: 'Visuospatial', score: 15, maxScore: 20 },
  ],
  riskSelf: 1,
  riskOthers: 2,
  riskXtras: 3,
};
