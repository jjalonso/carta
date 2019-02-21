
const data = {
  male: {
    personal: 'he',
    possesive: 'his',
  },
  female: {
    personal: 'she',
    possesive: 'her',
  },
};

export const personal = gender => data[gender].personal;
export const possesive = gender => data[gender].posessive;
