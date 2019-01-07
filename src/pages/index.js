import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
<Layout>
<section class="description">
 <ul class="title">
   <li><span>Decolonize</span></li>
   <li><span>Your</span></li>
   <li><span>Attention</span></li>
    </ul>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nam tempora voluptatem eligendi, voluptas. Unde totam tenetur obcaecati a, deleniti.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ut saepe, illum illo modi assumenda vitae provident libero ipsam omnis?</p>
</section>
  <section>
    <h2>Study Circle</h2>
    <ul>
      <li class="next">
        <Link to="/study/nomadism">#nomadism</Link>
        <p>Evading the state</p>
      </li>
      <li class="previous">
        <Link to="/study/hyperreal">#hyperreal</Link>
        <p>Thriving in a heavily mediated society</p>
      </li>
      <li class="previous">
        <Link to="/study/queerfam">#queerfam</Link>
        <p>New Configurations of Family: Towards Non-oppressive Relationships of Love and Care</p>
      </li>
    </ul>
  </section>
  <section>
    <h2>Decolonizing Attention</h2>
    <ul>
      <li>
        <Link to="/tools/signal">Signal</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, natus!</p>
      </li>
      <li>
        <Link to="/tools/mastodon">Mastodon</Link>
        <p>Natus minima laudantium amet illo? Iste tenetur facilis, molestiae totam.</p>
      </li>
      <li>
        <Link to="/tools/scuttlebutt">Scuttlebutt</Link>
        <p>Iste inventore commodi in voluptates odit reiciendis natus distinctio consectetur!</p>
      </li>
      <li>
        <Link to="/tools/mesh">Mesh Networks</Link>
        <p>Odio eligendi ipsum odit corporis quis quasi quas voluptates quam.</p>
      </li>
    </ul>
  </section>
  <section>
    <h2>Find the Others</h2>
    <ul>
      <li>
        <Link to="/team">Team</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, natus!</p>
      </li>
      <li>
        <a href="https://colet.space/">CoLET</a>
        <p>Natus minima laudantium amet illo? Iste tenetur facilis, molestiae totam.</p>
      </li>
      <li>
        <a href="https://www.nycmesh.net/">NYC Mesh</a>
        <p>Iste inventore commodi in voluptates odit reiciendis natus distinctio consectetur!</p>
      </li>
      <li>
        <a href="http://technoqueers.com/">TechnoQueers</a>
        <p>Odio eligendi ipsum odit corporis quis quasi quas voluptates quam.</p>
      </li>
    </ul>
  </section>
</Layout>
)

export default IndexPage
