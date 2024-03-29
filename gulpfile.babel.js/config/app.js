const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,
  htmlmin: {
    // убрать лишние символы пробелов только для production
    collapseWhitespace: isProd,
  },
  webpack: {
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  imagemin: {
    // чтобы видеть размеры картинок
    verbose: true,
  },
  fonter: {
    formats: ['woff', 'ttf', 'eot', 'svg'],
  },
  htmlPrettify: {
    indent_char: ' ',
    indent_size: 2,
  },
};
