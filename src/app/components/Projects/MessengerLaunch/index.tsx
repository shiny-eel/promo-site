import * as React from 'react';
import * as style from '../project.css';

const logo = require('../../../../assets/images/messenger-demo.gif');

export class MessengerLaunch extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={style.project}>
        <h1>Messenger Launcher</h1>
        <div className={style.projectContent}>
          <div className={style.imageHolder}>
            <img src={logo} style={{ width: '90%' }} alt="Extension gif" />
          </div>
          <div className={style.text}>
            <h2>A Chrome extension for quickly getting to Facebook Messenger conversations.</h2>
            <h2>See the code:</h2>
            <a href="https://github.com/shiny-eel/messenger-launch" target="_blank">
              <h2>Github Repository</h2>
            </a>
            <h2>Get the extension:</h2>
            <a
              href="https://chrome.google.com/webstore/detail/mail-messenger-app-intell/iajnhopgafljpgpnhcdjkgmpkkhkphgk/related?hl=en"
              target="_blank"
            >
              <h2>Chrome Store</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
