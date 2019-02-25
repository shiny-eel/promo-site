import * as React from 'react';
import * as style from '../project.css';
import { Project } from 'app/shared/Project';

const logo = require('../../../../assets/images/messenger-demo.gif');

export class MessengerLaunch extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Project title="Messenger Launcher">
        <div className={style.imageHolder}>
          <img src={logo} style={{ width: '90%' }} alt="Extension gif" />
        </div>
        <div className={style.text}>
          <p>
            {
              'A Chrome extension for quickly getting to Facebook Messenger conversations. We all about that w o r k f l o w here.'
            }
          </p>
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
      </Project>
    );
  }
}
