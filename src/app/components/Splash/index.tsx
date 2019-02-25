import * as React from 'react';
import * as style from './style.css';

export class Splash extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={[style.splashSection, style.pic].join(' ')}>
        <h1>Lu Shien Lee</h1>
      </div>
    );
  }
}
