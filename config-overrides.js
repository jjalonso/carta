const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const cartaDark = '#24243A';
const cartaGreen = '#5EC1A1';

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': cartaGreen,
      '@text-color': cartaDark,
      '@text-color-secondary': cartaGreen,
      '@primary-3': cartaGreen,
      '@heading-color': cartaDark,
      '@layout-header-background': cartaDark,
      '@error-color': '#E15750',
      '@font-family': 'Noto Sans, sans-serif',
      '@layout-footer-background': cartaDark,
      '@font-size-base': '12px',
    },
  }),
);
