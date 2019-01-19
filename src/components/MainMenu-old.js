import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: 'Closed' };
  }

  onEntering() {
    this.setState({ status: 'opening' });
  }

  onEntered() {
    this.setState({ status: 'opened' });
  }

  onExiting() {
    this.setState({ status: 'closing' });
  }

  onExited() {
    this.setState({ status: 'closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div class="collapse-group">
      <section className={`collapse-body ${this.state.status}`}>
        <a href="#" class="collapse-toggle" onClick={this.toggle}>
        <ul class="title">
   <li>Study</li>
   <li>Circle</li>
    </ul>
    <span class="description">Iste voluptatibus perspiciatis impedit quod expedita rerum, quam reprehenderit nulla, labore ex.</span>
    </a>
        <Collapse
          isOpen={this.state.collapse}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
       <div class="content"></div>
        </Collapse>
      </section>
      <section className={`collapse-body ${this.state.status}`}>
        <a href="#" class="collapse-toggle" onClick={this.toggle}>
        <ul class="title">
   <li>Discovery</li>
   <li>Circle</li>
    </ul>
    <span class="description">Pariatur provident error maxime illum ipsa quaerat, nobis, totam voluptas id nostrum!</span>
    </a>
        <Collapse
          isOpen={this.state.collapse}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
       <div class="content">Pending</div>
        </Collapse>
      </section>
      <section className={`collapse-body ${this.state.status}`}>
        <a href="#" class="collapse-toggle" onClick={this.toggle}>
        <ul class="title">
   <li>Tools</li>
   <li>For</li>
   <li>Autonomy</li>
    </ul>
    <span class="description">Nemo tenetur ab, fugit officiis asperiores magni aliquid quia modi officia laborum?</span>
    </a>
        <Collapse
          isOpen={this.state.collapse}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
       <div class="content">
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

  </div>
        </Collapse>
      </section>
      <section className={`collapse-body ${this.state.status}`}>
        <a href="#" class="collapse-toggle" onClick={this.toggle}>
        <ul class="title">
   <li>About</li>
   <li>Us</li>
    </ul>
    <span class="description">Cum, in, porro. Voluptate exercitationem sint nam. Repudiandae neque obcaecati nostrum aut.</span>
    </a>
        <Collapse
          isOpen={this.state.collapse}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
       <div class="content">Pending</div>
        </Collapse>
      </section>
       <section className={`collapse-body ${this.state.status}`}>
        <a href="#" class="collapse-toggle" onClick={this.toggle}>
        <ul class="title">
   <li>Find</li>
   <li>The</li>
   <li>Others</li>
    </ul>
    <span class="description">Dicta repellendus voluptates eius vel! Dolorem atque, velit dolorum natus quos esse?</span>
    </a>
        <Collapse
          isOpen={this.state.collapse}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
       <div class="content">
           <ul>
      <li>
        <a href="https://colet.space/">CoLET</a>
        <p>Natus minima laudantium amet illo? Iste tenetur facilis, molestiae totam.</p>
      </li>
      <li>
        <a href="https://www.nycmesh.net/">NYC Mesh</a>
        <p>Iste inventore commodi in voluptates odit reiciendis natus distinctio consectetur!</p>
      </li>
        <li>
        <a href="https://datasociety.net/">Data + Society</a>
        <p>Iste inventore commodi in voluptates odit reiciendis natus distinctio consectetur!</p>
      </li>
      <li>
        <a href="http://technoqueers.com/">TechnoQueers</a>
        <p>Odio eligendi ipsum odit corporis quis quasi quas voluptates quam.</p>
      </li>
    </ul>
  </div>
        </Collapse>
      </section>
      </div>
    );
  }
}

export default Example;
