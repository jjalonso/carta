
export const get = url => fetch(url).then(res => res.json());

export const post = (url, data = {}) => (
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
);
