import BraftEditor from 'braft-editor';
import moment from 'moment';

// For development purpose!
// Filling forms is boring/depressive
export const filledValues = {
  intro: {
    title: 'Mr',
    name: 'Anonymous',
    companion: ['Wife'],
    place: 'home',
    date: moment(),
    conditions: ['Diabetes type I'],
    medication: ['Accu-Check Mobile cassete', 'Novorapid Insuline'],
    problems: ['Insomnio', 'Loosing items'],
  },
  background: {
    country: 'Spain',
    emigrationYear: '1987',
    degree: 'Mental health nursing',
    isDegreeIncompleted: true,
    occupation: 'Mental health nurse',
    living: ['Superman'],
    totalChildren: '3',
    smoking: 'No',
    alcohol: 'No',
    other: BraftEditor.createEditorState('<p>Cositas varias</p>'),
  },
  tests: {
    examination: BraftEditor.createEditorState('<p>Lo examinanos</p>'),
    cognitive: [
      { name: 'Attention', score: 18, maxScore: 20 },
      { name: 'Memory', score: 8, maxScore: 20 },
      { name: 'Fluency', score: 5, maxScore: 20 },
      { name: 'Language', score: 12, maxScore: 20 },
      { name: 'Visuospatial', score: 15, maxScore: 20 },
    ],
    risks: [
      { name: 'Risk to self', level: 1 },
      { name: 'Risk to others', level: 2 },
      { name: 'Others risks', level: 3 },
    ],
  },
  conclusion: {
    impression: BraftEditor.createEditorState('<p>Patient was very anxious bla bla bla</p>'),
    carePlan: BraftEditor.createEditorState('<p>Nothing to do!</p>'),
  },
};

export const emptyValues = {
  intro: {
    // title: undefined,
    name: 'Anonymous',
    companion: [],
    place: 'clinic',
    date: moment(),
    conditions: [],
    medication: [],
    problems: [],
  },
  background: {
    // country: undefined,
    // emigrationYear: undefined,
    // degree: undefined,
    // isDegreeIncompleted: false,
    // occupation: undefined,
    living: [],
    totalChildren: 'No',
    smoking: 'No',
    alcohol: 'No',
    // other: undefined,
  },
  tests: {
    // examination: undefined,
    cognitive: [
      { name: 'Attention', score: undefined, maxScore: undefined },
      { name: 'Memory', score: undefined, maxScore: undefined },
      { name: 'Fluency', score: undefined, maxScore: undefined },
      { name: 'Language', score: undefined, maxScore: undefined },
      { name: 'Visuospatial', score: undefined, maxScore: undefined },
    ],
    risks: [
      { name: 'Risk to self', level: 1 },
      { name: 'Risk to others', level: 1 },
      { name: 'Others risks', level: 1 },
    ],
  },
  conclusion: {
    // impression: undefined,
    // carePlan: undefined,
  },
};
