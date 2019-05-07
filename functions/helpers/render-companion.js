module.exports = [
  'render-companion',
  (companion, options, possesive) => {
    const sortOptionsFirst = (array, arrayOptions) => array
      .map(item => (arrayOptions.includes(item.toLowerCase()) ? item.toLowerCase() : item))
      .sort(item => (arrayOptions.includes(item.toLocaleLowerCase()) ? -1 : 1));

    const arrayToString = array => array.join(', ').replace(/,(?!.*,)/gmi, ' and');

    if (companion.length) {
      const lowerCaseOptions = options.map(opt => opt.toLowerCase());
      const sorted = sortOptionsFirst(companion, lowerCaseOptions);
      const string = arrayToString(sorted);
      // Add prefix / suffix
      const suffix = 'was also present.';
      return lowerCaseOptions.includes(sorted[0]) ? `${possesive} ${string} ${suffix}` : `${string} ${suffix}`;
    }
    return 'the patient was alone on the assessment and I was unable to get a collateral history from a relative.';
  },
];
