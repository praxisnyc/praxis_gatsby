import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Sidebar from './Sidebar'
import './styles/style.scss'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div class=" limit up">
<div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-9"></div>
    </div>
</div>
</div>


        <div class="container all">
 <div class="allure">

 <div class="border">
</div>
</div>
 <div class="row">
      <Sidebar siteTitle={data.site.siteMetadata.title} />
      <div class="col-md-9">
        {children}
      </div>
    </div>



        </div>


        <div class="limit down">

</div>
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
