import path from 'path';

export default {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  loaders: [
    { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
    { test: /\.css$/, loaders: ['style', 'css', 'cssnext'] }
  ]
}