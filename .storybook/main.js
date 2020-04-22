module.exports = {
  addons: ['@storybook/addon-actions/register', '@storybook/addon-links', '@storybook/addon-notes/register', '@storybook/addon-knobs', 'storybook-addons-abstract/register', '@storybook/addons', '@storybook/addon-a11y/register'],
  stories: ['../src/**/*.stories.(ts|md)'],
};
