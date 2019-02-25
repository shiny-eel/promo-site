import * as React from 'react';
import * as style from '../project.css';

const logo = require('../../../../assets/images/mx-list.png');

export class MxSlate extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={style.project}>
        <h1>MX SLATE</h1>
        <div className={style.projectContent}>
          <div className={style.imageHolder}>
            <img src={logo} alt="MX Slate Screenshot" />
          </div>
          <div className={style.text}>
            <p>
              A tool for professionals in the film industry to quickly access an official schedule
              of future releases. A React Native application. Made during an internship with Vista
              Entertainment Solutions in 2019.
            </p>
            <h2>Get it here for free:</h2>
            <a href="https://itunes.apple.com/app/id1451114868" target="_blank">
              <h2>Apple App Store</h2>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.mxfilmapp" target="_blank">
              <h2>Android Play Store</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
