module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
    overrides: [
        {
          test: /node_modules\/react-icons\//,
          compact: true,
        },
      ],
  };
  