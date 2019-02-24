import * as React from 'react';
import * as style from '../project.css';

const logo = require('../../../../assets/images/messenger-demo.gif');

export class MessengerLaunch extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  //   componentDidMount() {
  //     configureAnchors({ scrollDuration: 200 });
  //   }
  //           <StickyBox offsetTop={20} offsetBottom={20}>

  render() {
    return (
      <div className={style.body}>
        <h1>Messenger Launcher</h1>
        <h2>A Chrome extension for quickly getting to Facebook Messenger conversations.</h2>
        <img src={logo} alt="Logo" />;<h2>Get it free for free:</h2>
        <a href="https://github.com/shiny-eel/messenger-launch">
          <h2>Github Repository</h2>
        </a>
        <a href="https://itunes.apple.com/app/id1451114868">
          <h2>Chrome Store</h2>
        </a>
      </div>
    );
  }
}
