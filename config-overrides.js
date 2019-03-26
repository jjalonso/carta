const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const cartaDark = '#24243A';

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#5EC1A1',
      '@text-color': cartaDark,
      '@primary-3': '#5EC1A1',
      '@heading-color': cartaDark,
      '@layout-header-background': cartaDark,
      '@error-color': '#E15750',
      '@font-family': 'Noto Sans, sans-serif',
      '@layout-footer-background': cartaDark,
    },
  }),
);
