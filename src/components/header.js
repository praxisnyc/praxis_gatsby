import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <header class="header">
          <h1 class="title">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </header>

  </div>
)

export default Header
