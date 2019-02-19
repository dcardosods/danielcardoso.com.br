import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header style={{ borderBottom: '1px solid grey' }}>
    <Link to="/" style={{ background: 'none', textShadow: 'none' }}>
      <h1
        style={{
          padding: '8px',
          display: 'inline-block',
          fontSize: '44px',
          marginBottom: '1px',
        }}
      >
        <div>Daniel Cardoso</div>
        <div
          style={{ textAlign: 'right', fontSize: '20px', marginTop: '-8px' }}
        >
          dS
        </div>
      </h1>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
