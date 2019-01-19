import React from 'react';
import { UncontrolledCollapse } from 'reactstrap';
import study from '../components/data/study.json';

const Example = () => (
  <div class="collapse-group">

  <section class="collapse-body">
  <a href="#" class="collapse-toggle"  id="toggler">
        <ul class="title">
   <li>Study</li>
   <li>Circle</li>
    </ul>
    <span class="description">Iste voluptatibus perspiciatis impedit quod expedita rerum, quam reprehenderit nulla, labore ex.</span>
    </a>
    <UncontrolledCollapse toggler="#toggler" className="content">

       <ul>
            {study.editions.map(edition =>(
      <li>

         <a className={edition.status} href="/study/nomadism">#{edition.title}</a>
        <p>{edition.description}</p>
      </li>
      ))}
    </ul>
    </UncontrolledCollapse>
    </section>
  </div>
);

export default Example;
