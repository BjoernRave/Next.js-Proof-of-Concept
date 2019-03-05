const path = require('path');

module.exports = {
  components: './components/**/*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: {
    resolve: {
      alias: {
        static: path.join(__dirname, 'static'),
        lib: path.join(__dirname, 'lib'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx/,
          loader: require.resolve('ts-loader'),
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
              },
            },
          ],
        },
      ],
    },
  },
};
