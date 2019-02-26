import { h, Component } from 'preact';
import { redirectTo } from 'app/common/helpers/history';

const TEN_YEARS_IN_MS = 1000 * 60 * 60 * 24 * 365 * 10;

export default class LanguageSelector extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e, item) {
    e.preventDefault();
    Cookie.set('user_locale', item.locale, {
      maxAge: TEN_YEARS_IN_MS,
      consentClass: 'essential',
    });

    const { href } =
      document.head.querySelector(
        `link[hreflang='${item.locale.replace('_', '-')}']`
      ) || {};

    redirectTo(href || '/');
  }

  render() {
    const { flags } = this.props;
    const { languageSelector } = flags;
    if (!languageSelector) {
      return null;
    }

    const { languageLocales, activeName } = languageSelector;

    return (
      <div id="ls-lang-menu" className="lang-menu user-menu-item">
        <a
          id="ls-lang-selected"
          className="ls-lang-selected icon-arrow-down-large"
        >
          {activeName}
        </a>
        <div id="ls-lang-list" className="ls-lang-list lang-list">
          {languageLocales.map(item => (
            <a
              data-locale={item.locale}
              className="lang-list-item"
              key={item.locale}
              onClick={e => this.handleClick(e, item)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
