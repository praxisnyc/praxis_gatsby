import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const IndexPage = () => (
<Layout>
  <h2>#nomadism</h2>
  <p class="slogan">Evading the state</p>
  <p class="about">This study circle will meet in Brooklyn every other Wednesday for a total of 4 sessions.</p>

  <section>
    <h3>Session 1</h3>
    <p>Wednesday, TBD, 7-9pm</p>
    <ol>
      <li>
        <h4>A Thousand Plateaus by Deleuze and Guattari</h4>
        <ul>
          <li>1227: Treatise on Nomadology: The War Machine</li>
          <li> <a href="https://libcom.org/files/A%20Thousand%20Plateaus.pdf">download PDF</a></li>
        </ul>
      </li>
    </ol>

  </section>
    <section>
    <h3>Session 2</h3>
    <p>Wednesday, TBD, 7-9pm</p>
    <ol>
      <li>
        <h4>A Thousand Plateaus by Deleuze and Guattari</h4>
        <ul>
          <li>7000 B.C.: Apparatus of Capture</li>
          <li> <a href="https://libcom.org/files/A%20Thousand%20Plateaus.pdf">download PDF</a></li>
        </ul>
      </li>
    </ol>
  </section>

    <section>
    <h3>Session 3</h3>
    <p>Wednesday, TBD, 7-9pm</p>
    <ol>
      <li>
        <h4>A Thousand Plateaus by Deleuze and Guattari</h4>
        <ul>
          <li>1440: The Smooth and the Striated</li>
          <li> <a href="https://libcom.org/files/A%20Thousand%20Plateaus.pdf">download PDF</a></li>
        </ul>
      </li>
    </ol>
  </section>


        <section>
    <h3>Session 4</h3>
    <p>Wednesday, TBD, 7-9pm</p>
    <ol>
      <li>
        <h4>TBD</h4>
      </li>
    </ol>
  </section>

  </Layout>
  )

  export default IndexPage
