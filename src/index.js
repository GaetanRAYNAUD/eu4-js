import DateFnsUtils from '@date-io/date-fns';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import { ThemeProvider } from '@material-ui/styles';
import App from 'App';
import { ConnectedIntlProvider } from 'components/i18n/ConnectedIntlProvider';
import { configureStore } from 'config/configuration';
import frLocale from 'date-fns/locale/fr';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import theme from './theme'

const { store } = configureStore();

const root = document.getElementById("root");

if (root) {
  ReactDOM.render(
    <Provider store = { store }>
      <ConnectedIntlProvider>
        <ThemeProvider theme = { theme }>
          <MuiPickersUtilsProvider utils = { DateFnsUtils } locale = { frLocale }>
            <App />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </ConnectedIntlProvider>
    </Provider>,
    root
  )
}
