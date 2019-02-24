import * as React from 'react';
import * as style from './style.css';
import StickyBox from 'react-sticky-box';
import { MxSlate } from './MxSlate';
import { MessengerLaunch } from './MessengerLaunch';

export class Projects extends React.Component<any, any> {
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
        <div className={[style.row, style.normal].join(' ')}>
          <div className={style.leftside}>
            <StickyBox>
              <div>
                <h1>Projects</h1>
              </div>
            </StickyBox>
          </div>
          <div className={style.rightside}>
            {/* <h1>Here is the content</h1> */}
            <MxSlate />
            <MessengerLaunch />
          </div>
        </div>
      </div>
    );
  }
}
