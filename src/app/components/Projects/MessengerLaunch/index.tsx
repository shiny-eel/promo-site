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
          <h3>See the code:</h3>
          <a href="https://github.com/shiny-eel/messenger-launch" target="_blank">
            <h3>Github Repository</h3>
          </a>
          <h3>Get the extension:</h3>
          <a
            href="https://chrome.google.com/webstore/detail/mail-messenger-app-intell/iajnhopgafljpgpnhcdjkgmpkkhkphgk/related?hl=en"
            target="_blank"
          >
            <h3>Chrome Store</h3>
          </a>
        </div>
      </Project>
    );
  }
}
