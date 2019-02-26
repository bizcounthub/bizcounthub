import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import classNames from 'classnames';
import { myStuffLayoutSelector } from 'app/desktop/selectors/myStuffLayout';

class MyStuffLayout extends Component {
  render() {
    const { tabs } = this.props;
    return (
      <div
        id="ls-my-stuff-tabs"
        className="tabs-container ls-my-stuff notranslate"
      >
        <ul className="tabs" data-bhw="UserProfileNavBar">
          {tabs.map(tab => (
            <li
              id={tab.id}
              className={classNames({
                active: tab.active,
              })}
              data-bhc={tab.bhc}
              data-bhw={tab.bhw}
              key={tab.id}
            >
              <a href={tab.url}>{tab.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(myStuffLayoutSelector)(MyStuffLayout);
