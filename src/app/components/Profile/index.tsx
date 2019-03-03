import * as React from 'react';
import * as style from './style.css';

const profilePic = require('../../../assets/images/profile.jpg');

export class Profile extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

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
            <p>University: Engineering + Economics conjoint at the University of Auckland</p>
            <p>
              High School: Senior prefect, sports captain, and music leader at Auckland Grammar
              School
            </p>
            <p>Location: Living in New Zealand (but keen to work anywhere)</p>
          </div>
        </div>
      </div>
    );
  }
}
