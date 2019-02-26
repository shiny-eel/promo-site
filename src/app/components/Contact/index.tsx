import * as React from 'react';
import * as style from './style.css';
import { SocialIcon } from 'react-social-icons';

const iconStyle: any = {
  width: '8rem',
  height: '8rem'
};

export class Contact extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={style.profile}>
        <div className={style.profileHeader}>
          <h1>Contact</h1>
          <h3>Reach out to get more info, talk business, or just to chat.</h3>
          <hr />
        </div>
        <div className={style.spread}>
          <div className={style.about}>
            <SocialIcon url="https://github.com/shiny-eel" style={iconStyle} target="_blank" />
            <SocialIcon url="mailto:lee.lushien@gmail.com" style={iconStyle} target="_blank" />
            <SocialIcon
              url="https://www.facebook.com/revolushien"
              style={iconStyle}
              target="_blank"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/lushienlee"
              style={iconStyle}
              target="_blank"
            />
          </div>
          <div className={style.details}>
            <h2>More</h2>
            <a
              href="https://s3-ap-southeast-2.amazonaws.com/lushien-resources/CV+2019+FEBRUARY.pdf"
              target="_blank"
            >
              <h3>Download my CV</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
