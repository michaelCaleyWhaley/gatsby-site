import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from './logo';

const Header = () => (
  <div className="header">
    <div className="header__inner">
      <Logo />
      <ul className="header__nav">
        <li>
          <Link activeClassName="active" to="/">Index</Link>
        </li>
        <li>
          <Link activeClassName="active" to="/page-2">Page2</Link>
        </li>
        <li>
          <Link activeClassName="active" to="/page-3">Page3</Link>
        </li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
