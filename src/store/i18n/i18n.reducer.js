import { en, fr } from 'components/i18n/locales';

const locales = {
  fr,
  en
};

export default (state = locales.fr, action) => {
  switch (action.type) {
    case "CHANGE_LOCALE":
      return {
        ...locales[ action.locale ]
      };
    default:
      return state
  }
}
