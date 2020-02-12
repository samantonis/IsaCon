import { AmplifyTheme } from 'aws-amplify-react';

//overrides for amplify theming
const AmplifyCustomTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    color: '#F2EBCB',
    backgroundColor: '#182B19'
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
    backgroundColor: '#182B19',
    color: '#F2EBCB'
  }
};

//main theme
export const theme = {
  ...AmplifyCustomTheme,
  colors: {
    primary: '#182B19',
    secondary: '#F2EBCB',
    black: '#000',
    white: '#fff'
  },
  spacing: {
    gutter: '20px'
  }
};