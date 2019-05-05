module.exports = [
  'render-cognitive',
  (cognitive, personal) => {
    const resultList = `<ul>${cognitive.map(item => `<li>${item.score}/${item.maxScore} on ${item.name}</li>`).join(' ')}</ul>`;
    const scoring = cognitive.reduce((acc, v) => acc + v.score, 0);
    const maxScoring = cognitive.reduce((acc, v) => acc + v.maxScore, 0);

    return `The patient scored ${scoring} out of ${maxScoring}, ${personal} got the following result:${resultList}`;
  },
];
