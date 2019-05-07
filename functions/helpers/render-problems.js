module.exports = [
  'render-problems',
  (problems, personal) => {
    const arrayToString = array => array.join(', ').replace(/,(?!.*,)/gmi, ' and');
    const lowerCaseProblems = problems.map(item => item.toLowerCase());

    if (problems.length > 1) {
      const random = Math.round(Math.random() * ((problems.length - 1) - 1) + 1);
      const problemsString1 = arrayToString(lowerCaseProblems.splice(0, random));
      const problemsString2 = arrayToString(lowerCaseProblems);
      return `The patient reports that ${personal} has noticed ${problemsString1}, ${personal} also described ${problemsString2}`;
    }
    return `The patient reports ${problems[0]} however he was unable to describe any other symptoms`;
  },
];
