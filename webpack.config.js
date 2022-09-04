module.exports = {
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      '@': require('path').resolve(__dirname, './src')
    }
  },
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: false
            }
          }
        }
      ]
    }
  ]
};
