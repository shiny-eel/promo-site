import * as React from 'react';
import * as style from '../project.css';

const logo = require('../../../../assets/images/mx-list.png');

export class MxSlate extends React.Component<any, any> {
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
        <h1>MX SLATE</h1>
        <h2>
          A React Native application. Made during an internship with Vista Entertainment Solutions
          in 2019.
        </h2>
        <img src={logo} alt="Logo" />;<h2>Get it free for free:</h2>
        <a href="https://itunes.apple.com/app/id1451114868">
          <h2>Apple App Store</h2>
        </a>
        <a href="https://itunes.apple.com/app/id1451114868">
          <h2>Android Play Store</h2>
        </a>
      </div>
    );
  }
}
