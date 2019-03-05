import * as React from 'react';
import * as style from './style.css';
import { goToAnchor } from 'react-scrollable-anchor';
import { Sections } from 'app/containers/App';
// import {Section}

const profilePic = require('../../../assets/images/profile.jpg');

export class Profile extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  onCVClick = (): void => {
    goToAnchor(Sections.Contact);
  };

  render() {
    return (
      <div className={style.profile}>
        <div className={style.profileHeader}>
          <h1>Profile</h1>
          <h3>I'm a young software engineer</h3>
          <hr />
        </div>
        <div className={style.spread}>
          <div className={style.about}>
            <h2>About Me</h2>
            <p>
              A young software engineer in-the-making, currently pursuing a BCom/BE (Hons) conjoint
              degree with exposure to work in software development and testing.
            </p>
            <p>
              I am looking for opportunities to learn about and work with modern technologies, and
              the people who develop them.
            </p>
            <p>
              Currently in my final year of the five needed to attain my conjoint degree - so I am
              looking for a graduate role for 2020.
            </p>
          </div>
          <div className={style.pic}>
            <img src={profilePic} />
          </div>
          <div className={style.details}>
            <h2>Details</h2>
            <h5>Name:</h5> <p>Lu Shien Lee</p>
            <h5>Tertiary Education:</h5>
            <p>Software Engineering and Economics at the University of Auckland (BCom/BE (Hons))</p>
            <h5>Secondary Education:</h5>
            <p>Senior prefect, sports captain, and music leader at Auckland Grammar School</p>
            <h5>Location:</h5>
            <p>Living in New Zealand (but keen to work anywhere)</p>
            <h5>Work Experience:</h5>
            <button
              onClick={(e) => {
                this.onCVClick();
              }}
            >
              <p className={style.link}>See my CV below</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
