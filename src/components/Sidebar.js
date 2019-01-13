import React from 'react'
import { Link } from 'gatsby'

const Sidebar = ({ siteTitle }) => (
  <aside class="col-md-3">
    <header class="header">
          <h1 class="title">
        <Link to="/">
        <div>Pra</div>
        <div>xis<span>.</span></div>
        <div><span>nyc</span></div>
        </Link>
      </h1>
    </header>
    <footer class="footer">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla fugiat odit voluptates accusamus recusandae animi totam. Laudantium inventore nisi explicabo?</p>
    </footer>
  </aside>
)

export default Sidebar
