import * as React from 'react';
import * as style from './style.css';
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor';
import { Projects, Profile, Splash } from 'app/components';
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

  render() {
    // TODO: Add linear gradient shade to title
    return (
      <div className={style.body}>
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
          <div className={style.section}>
            <button onClick={(e) => goToAnchor('splash')}> CLICK ME </button>
            <div className={style.normal}>Hello</div>
            <h1>Next Section Again</h1>
          </div>
        </Section>
      </div>
    );
  }
}
