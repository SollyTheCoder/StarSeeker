module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'starseeker-navigation': ['./src/nav'],
          'starseeker-screens': ['./src/screens'],
          'starseeker-components': ['./src/components'],
          'starseeker-styles': ['./src/styles'],
        },
      },
    ],
  ],
};
