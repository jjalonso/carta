module.exports = [
  'render-risks',
  (risks) => {
    const arrayToString = array => array.join(', ').replace(/,(?!.*,)/gmi, ' and');

    const levelWording = { 1: 'no', 2: 'medium', 3: 'high' };
    const riskWording = {
      'Risk to self': 'risk to self',
      'Risk to others': 'risk to others',
      'Others risks': 'other risk behaviours were identified',
    };
    const risksArray = risks.map(item => `${levelWording[item.level]} ${riskWording[item.name]}`);

    return `The patient present ${arrayToString(risksArray)}`;
  },
];
