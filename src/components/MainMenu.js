import React from 'react';
import { UncontrolledCollapse } from 'reactstrap';

const Example = () => (
<div class="collapse-group">
  <section class="collapse-body">
    <a href="#" class="collapse-toggle"  id="study">
      <ul class="title">
       <li>Study</li>
       <li>Circle</li>
     </ul>
     <span class="description">We need to get educated: A bottom-up way to find understanding of the seminal issues that shape our future.</span>
   </a>
   <UncontrolledCollapse toggler="#study" className="content">
     <ul>
      <li>
       <a class="next" href="/study/nomadism">#nomadism</a>
       <p>Evading the state</p>
     </li>
     <li>
       <a class="previous" href="/study/hyperreal">#hyperreal</a>
       <p>Thriving in a heavily mediated society</p>
     </li>
     <li>
       <a class="previous" href="/study/queerfam">#queerfam</a>
       <p>New Configurations of Family: Towards Non-oppressive Relationships of Love and Care</p>
     </li>
   </ul>
 </UncontrolledCollapse>
</section>
  <section class="collapse-body">
    <a href="#" class="collapse-toggle"  id="discovery">
      <ul class="title">
     <li>Discovery</li>
     <li>Circle</li>
     </ul>
     <span class="description">
      Short design exercises to distill recommendations with people affected by the topic.
     </span>
   </a>
   <UncontrolledCollapse toggler="#discovery" className="content">
Pending
 </UncontrolledCollapse>
</section>
  <section class="collapse-body">
    <a href="#" class="collapse-toggle"  id="tools">
      <ul class="title">
       <li>Tools</li>
       <li>for</li>
       <li>Autonomy</li>
     </ul>
     <span class="description">Evade the algorithm rat-race of surveillance capitalism with community-owned communication tools.</span>
   </a>
   <UncontrolledCollapse toggler="#tools" className="content">
<ul>
      <li>
        <a href="/tools/signal">Signal</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, natus!</p>
      </li>
      <li>
        <a href="/tools/mastodon">Mastodon</a>
        <p>Natus minima laudantium amet illo? Iste tenetur facilis, molestiae totam.</p>
      </li>
      <li>
        <a href="/tools/scuttlebutt">Scuttlebutt</a>
        <p>Iste inventore commodi in voluptates odit reiciendis natus distinctio consectetur!</p>
      </li>
      <li>
        <a href="/tools/mesh">Mesh Networks</a>
        <p>Odio eligendi ipsum odit corporis quis quasi quas voluptates quam.</p>
      </li>
    </ul>
 </UncontrolledCollapse>
</section>
  <section class="collapse-body">
    <a href="#" class="collapse-toggle"  id="about">
      <ul class="title">
       <li>About</li>
       <li>Us</li>
     </ul>
     <span class="description">We're a group of queer people gathering to understand challenges and opportunities of our digital society .</span>
   </a>
   <UncontrolledCollapse toggler="#about" className="content">
Pending
 </UncontrolledCollapse>
</section>
  <section class="collapse-body">
    <a href="#" class="collapse-toggle"  id="others">
      <ul class="title">
       <li>Find</li>
       <li>the</li>
       <li>Others</li>
     </ul>
     <span class="description">Find the like-minded groups and organizations we share orbit with.</span>
   </a>
   <UncontrolledCollapse toggler="#others" className="content">

           <ul>
      <li>
        <a target="others" href="https://colet.space/">CoLET: The Collective for Liberation, Ecology, and Technology</a>
      </li>
      <li>
        <a target="others" href="https://www.nycmesh.net/">NYC Mesh</a>

      </li>
      <li>
        <a target="others" href="https://www.techworkescoalition.org/">Tech Workers Coalition</a>

      </li>
       <li>
        <a target="others" href="https://www.ainowinstitute.org">AI NOW</a>

      </li>
      <li><a target="others" href="https://ajlunited.org">Algorithmic Justice League</a>
      </li>
        <li>
        <a target="others" href="https://datasociety.net/">Data + Society</a>
      </li>
      <li>
        <a target="others" href="http://technoqueers.com/">TechnoQueers</a>
      </li>
    </ul>

 </UncontrolledCollapse>
</section>
</div>
);


export default Example;
