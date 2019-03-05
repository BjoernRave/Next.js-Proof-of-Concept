import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../pages/_app';

export default function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
