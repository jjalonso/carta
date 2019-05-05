module.exports = [
  'render-degree',
  (degree, isDegreeIncompleted) => (degree ? `studied ${degree}${isDegreeIncompleted ? ' but did not complete it' : ''}` : 'did not study'),
];
