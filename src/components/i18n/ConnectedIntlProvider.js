import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const { locale, messages } = state.i18n;
  return { key: locale, locale, messages }
}

const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);

export { ConnectedIntlProvider }
