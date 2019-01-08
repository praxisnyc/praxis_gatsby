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
      <li class="next">
        <a class="next" href="/study/nomadism">#nomadism</a>
        <p>Evading the state</p>
      </li>
      <li class="previous">
        <a class="previous" href="/study/hyperreal">#hyperreal</a>
        <p>Thriving in a heavily mediated society</p>
      </li>
      <li class="previous">
        <a class="previous" href="/study/queerfam">#queerfam</a>
        <p>New Configurations of Family: Towards Non-oppressive Relationships of Love and Care</p>
      </li>
    </ul>
  </div>
        </Collapse>
      </section>
      <section className={`collapse-body ${this.state.status}`}>
        <a href="#" class="collapse-toggle" onClick={this.toggle}>
        <ul class="title">
   <li>Discovery</li>
   <li>Circle</li>
    </ul>
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
        <a href="/team">Team</a>
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
  </div>
        </Collapse>
      </section>
      </div>
    );
  }
}

export default Example;
