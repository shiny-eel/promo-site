import * as React from 'react';
import * as style from './style.css';
import ScrollableAnchor, { configureAnchors, goToAnchor } from 'react-scrollable-anchor';
import { Projects } from 'app/components';
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
        <ScrollableAnchor id={'section1'}>
          <div className={style.section}>
            <div className={[style.splashSection, style.pic].join(' ')}>
              <h1>Lu Shien Lee</h1>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div className={style.section}>
            <Projects />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <div className={style.section}>
            <button onClick={(e) => goToAnchor('section1')}> CLICK ME </button>
            <div className={style.normal}>Hello</div>
            <h1>Next Section Again</h1>
          </div>
        </ScrollableAnchor>
        <Section id={'about'}>
          <h1>ABOUT ME</h1>
        </Section>
      </div>
    );
  }
}
