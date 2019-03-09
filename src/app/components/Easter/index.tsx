import * as React from 'react';
import * as style from './style.css';
// import { SocialIcon } from 'react-social-icons';

const mobaIcon = require('../../../assets/images/alistar-build.jpg');

// const iconStyle: any = {
// flex: '1',
// width: '80%',
// height: '80%',
// width: '6rem',
// height: '6rem',
// margin: '1rem 1rem'
// };

export class Easter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={style.contactContainer}>
        <div className={style.easterEgg}>
          <a
            href="https://www.mobafire.com/league-of-legends/build/support-alistar-feeding-your-team-with-milk-296695"
            target="_blank"
          >
            <p>Read my Season 5 Alistar Support guide</p>
            <img src={mobaIcon} />
          </a>
        </div>
        {/* <div className={style.spacer} /> */}
      </div>
    );
  }
}
