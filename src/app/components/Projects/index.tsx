import * as React from 'react';
import * as style from './style.css';
import StickyBox from 'react-sticky-box';
import { MxSlate } from './MxSlate';
import { MessengerLaunch } from './MessengerLaunch';
import { GenreNN } from './GenreNN';
import MediaQuery from 'react-responsive';
import { SocialIcon } from 'react-social-icons';

const iconStyle: any = {
  width: '6rem',
  height: '6rem',
  margin: '1rem 1rem'
};

export class Projects extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  renderGitHubButton = (): any => {
    return <SocialIcon url="https://github.com/shiny-eel" style={iconStyle} target="_blank" />;
  };

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
                <div className={style.stickyGithub}>
                  <h3>View all my public repositories</h3>
                  <div>{this.renderGitHubButton()}</div>
                </div>
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
            <div className={style.corner}>{this.renderGitHubButton()}</div>
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
