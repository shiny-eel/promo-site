import * as React from 'react';
import * as style from './style.css';
import { configureAnchors } from 'react-scrollable-anchor';
import { Projects, Profile, Splash, Contact } from 'app/components';
import { Section } from 'app/shared/Section';
// import { Projects }

// const desktopImage = require('../../../assets/images/baby-lsl.png');
// const mobileImage = require('../../../assets/images/baby-lsl-m.png');

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    configureAnchors({ scrollDuration: 200 });
  }

  //  <h1>Next Section Again</h1>
  // <button onClick={(e) => goToAnchor('splash')}> CLICK ME </button>
  // <div className={style.normal}>Hello</div>
  render() {
    // TODO: Add linear gradient shade to title
    return (
      <div className={style.container}>
        <div className={style.headerImage} />
        <div className={style.filler} />
        <Section id={'splash'}>
          <Splash />
        </Section>
        <Section id={'about'}>
          <Profile />
        </Section>
        <Section id={'projects'}>
          <Projects />
        </Section>
        <Section id={'other'}>
          <Contact />
        </Section>
      </div>
    );
  }
}
