import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div>
    <header>
     <div class="container">
        <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
     </div>
    </header>

  </div>
)

export default Header
