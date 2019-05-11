module.exports = [
  'render-living',
  (problems, possessive) => {
    const lowerCaseProblems = problems.map(item => item.toLowerCase());
    const arrayToString = array => array.join(', ').replace(/,(?!.*,)/gmi, ' and');

    return problems.length ? `with ${possessive} ${arrayToString(lowerCaseProblems)}` : 'alone';
  },
];
