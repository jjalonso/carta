import { get, post } from '../util/http';
import { serialise, deserialise } from '../util/serialisation';

export const fetchMedication = async query => (
  get(`https://openprescribing.net/api/1.0/bnf_code/?format=json&q=${query}`)
    .then(json => json
      .filter(med => med.type === 'product format')
      .slice(0, 50)
      .map(med => med.name.replace(/_/g, ' '))
      .filter((med, i, array) => array.indexOf(med) === i)) // Filter Duplication
);

export const fetchLetter = (state) => {
  const values = serialise({
    ...state.intro,
    ...state.background,
    ...state.tests,
    ...state.conclusion,
  });
  return post('/api/generateLetter', { values });
};

export const fetchFormOptions = () => get('/api/formOptions').then(json => deserialise(json));
