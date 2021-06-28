import '../pages/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
}

export const decorators = [
  (storyFn) => <div style={{ padding: "16px" }}>{storyFn()}</div>,
];