import { AmplifyTheme } from 'aws-amplify-react';

//overrides for amplify theming
const AmplifyCustomTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    color: '#fff',
    backgroundColor: 'darkGreen'
  },
  sectionFooter: {
    ...AmplifyTheme.sectionFooter,
    color: '#000',
    backgroundColor: '#fff'
  },
  formSection: {
    ...AmplifyTheme.formSection,
    backgroundColor: '#fff',
    color: '#000'
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'darkGreen',
    color: '#fff'
  }
};

//main theme
export const theme = {
  ...AmplifyCustomTheme,
  colors: {
    primary: 'darkGreen',
    secondary: 'blue',
    black: '#000',
    white: '#fff'
  },
  spacing: {
    gutter: '20px'
  }
};
