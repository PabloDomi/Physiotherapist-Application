import type { Preview } from "@storybook/react";
import '../src/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
