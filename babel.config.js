module.exports = function (api) {
  api.cache(true);
  
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      [
        "styled-jsx/babel"
      ],
      ["@babel/plugin-proposal-decorators", {"legacy": true}],
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-optional-chaining"
    ]
  }
}
