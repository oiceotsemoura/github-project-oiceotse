module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
          '.png',
          '.jpg',
        ],
        alias: {
          '@types': './src/@types',
          '@components': './src/components',
          '@services': './src/services',
          '@constants': './src/constants',
          '@navigator': './src/navigator',
          '@features': './src/features',
          '@theme': './src/theme',
          '@store': './src/store',
          '@interfaces': './src/interfaces',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
