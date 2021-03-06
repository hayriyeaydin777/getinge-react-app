module.exports = {
  "stories": [
    "../src/**/*.stories.js",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-performance/register"
  ],
}