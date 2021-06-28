const path = require('path');

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-viewport"
  ],
  "presets": [path.resolve(__dirname, './next-preset.js')],
  "webpackFinal": async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ]

    return config;
  }
}