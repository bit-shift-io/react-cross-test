const path = require('path');
const { override, addBabelPlugins, babelInclude, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    ['@features']: path.resolve(__dirname, './src/features'),
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@utils']: path.resolve(__dirname, './src/utils')
  }),
  ...addBabelPlugins(['@babel/plugin-proposal-class-properties', {loose: true}]),
  babelInclude([
    path.resolve(__dirname, 'node_modules/@rneui/base'),
    path.resolve(__dirname, 'node_modules/@rneui/themed'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-ratings'),
    path.resolve(__dirname, 'src'),
  ])
);