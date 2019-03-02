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

  renderItems = (): any => {
    return (
      <div>
        <MxSlate />
        <hr />
        <MessengerLaunch />
        <hr />
        <GenreNN />
        <hr />
      </div>
    );
  };

  renderDesktop = (): any => {
    return (
      <div className={style.row}>
        <div className={style.sidebarContainer}>
          <div className={style.projectsHeader}>
            <StickyBox>
              <div className={style.stickyBox}>
                <h1>Projects</h1>
              </div>
            </StickyBox>
            {/* <div className={style.projectsHeader}>
            </div> */}
          </div>
        </div>
        <div className={style.projectsContent}>{this.renderItems()}</div>
      </div>
    );
  };

  renderMobile = (): any => {
    return (
      <div className={style.row}>
        <div className={style.projectsContent}>
          <div className={style.projectsHeader}>
            <h1>Projects</h1>
          </div>
          {this.renderItems()}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <MediaQuery orientation="landscape">{this.renderDesktop()}</MediaQuery>
        <MediaQuery orientation="portrait">{this.renderMobile()}</MediaQuery>
      </div>
    );
  }
}
