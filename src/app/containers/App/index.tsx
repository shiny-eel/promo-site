import * as React from 'react';
import * as style from './style.css';
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor';
import { Projects, Profile, Splash, Contact } from 'app/components';
import { Section } from 'app/shared/Section';
// import { Projects }

// const desktopImage = require('../../../assets/images/baby-lsl.png');
// const mobileImage = require('../../../assets/images/baby-lsl-m.png');
export enum Sections {
  Splash = 'splash',
  About = 'about',
  Projects = 'projects',
  Contact = 'contact'
}
const sections = [Sections.Splash, Sections.About, Sections.Projects, Sections.Contact];

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    configureAnchors({ scrollDuration: 400 });
  }

  goToNext = (): void => {
    goToAnchor(sections[sections.indexOf(this.props.location.hash.substring(1)) + 1]);
  };

  //  <h1>Next Section Again</h1>
  // <button onClick={(e) => goToAnchor('splash')}> CLICK ME </button>
  // <div className={style.normal}>Hello</div>
  render() {
    // TODO: Add linear gradient shade to title
    console.log(this.props.location);
    return (
      <div className={style.container}>
        <Section id={Sections.Splash}>
          <Splash />
        </Section>
        <Section id={Sections.About}>
          <Profile />
        </Section>
        <Section id={Sections.Projects}>
          <Projects />
        </Section>
        <Section id={Sections.Contact}>
          <Contact />
        </Section>
        <div className={style.navButton}>
          <button onClick={(e) => this.goToNext()}> CLICK ME </button>
        </div>
      </div>
    );
  }
}
