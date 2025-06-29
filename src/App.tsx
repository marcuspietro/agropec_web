import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './hooks';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => (
  <Router>

    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </ThemeProvider>

  </Router>
);