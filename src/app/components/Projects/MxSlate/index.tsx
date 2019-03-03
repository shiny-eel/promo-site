import * as React from 'react';
import * as style from '../project.css';
import { Project } from 'app/shared/Project';

const logo = require('../../../../assets/images/mx-list.jpg');

export class MxSlate extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Project title="MX Slate">
        <div className={style.imageHolder}>
          <img src={logo} alt="MX Slate Screenshot" />
        </div>
        <div className={style.text}>
          <p>
            A tool for professionals in the film industry to quickly access an official schedule of
            future releases. A React Native application. Made during an internship with Vista
            Entertainment Solutions in 2019.
          </p>
          <h3>Get it here for free:</h3>
          <a href="https://itunes.apple.com/app/id1451114868" target="_blank">
            <h3>Apple App Store</h3>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.mxfilmapp" target="_blank">
            <h3>Android Play Store</h3>
          </a>
        </div>
      </Project>
    );
  }
}
