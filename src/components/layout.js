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
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
