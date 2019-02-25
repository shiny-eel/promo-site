import * as React from 'react';
import * as style from './style.css';
import StickyBox from 'react-sticky-box';
import { MxSlate } from './MxSlate';
import { MessengerLaunch } from './MessengerLaunch';
import { GenreNN } from './GenreNN';
import MediaQuery from 'react-responsive';

export class Projects extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  // Desktop = (props: any) => {
  //   <Responsive {...props} orientation="portrait" />;
  // };

  // Handheld = (props: any) => {
  //   <Responsive {...props} orientation="landscape" />;
  // };

  renderDesktop = (): any => {
    return (
      <div className={style.row}>
        <div className={style.projectsHeader}>
          <StickyBox>
            <h1>Projects</h1>
          </StickyBox>
        </div>
        <div className={style.projectsContent}>
          <MxSlate />
          <MessengerLaunch />
          <GenreNN />
        </div>
      </div>
    );
  };

  renderMobile = (): any => {
    return (
      <div className={style.row}>
        <div className={style.projectsContent}>
          {/* <StickyBox> */}
          {/* </StickyBox> */}
          <MxSlate />
          <MessengerLaunch />
          <GenreNN />
          <div className={style.projectsHeader}>
            <h1>Projects</h1>
          </div>
        </div>
      </div>
    );
  };
  // <MediaQuery query="(orientation: landscape)">

  render() {
    return (
      <div>
        <MediaQuery orientation="landscape">{this.renderDesktop()}</MediaQuery>
        <MediaQuery orientation="portrait">{this.renderMobile()}</MediaQuery>
      </div>
    );
  }
}
