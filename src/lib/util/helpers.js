
export default (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx);
