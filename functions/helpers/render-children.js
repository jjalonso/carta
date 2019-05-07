module.exports = [
  'render-children',
  (children) => {
    switch (children) {
      case '1':
        return `${children} child`;
      default:
        return `${children.toLowerCase()} children`;
    }
  },
];
