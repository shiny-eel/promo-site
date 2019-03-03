import * as React from 'react';
import * as style from './style.css';
// import { Parallax } from 'react-scroll-parallax';

// const backgroundImage = '../../../assets/images/baby-lsl.jpg';

export class Splash extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  // HeroBanner = (image: string, min: string, max: string): any => (
  //   <div className="hero-container">
  //     <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
  //       <div className="hero-image" style={{ backgroundImage: `url(${image})` }} />
  //     </Parallax>
  //     {/* <div className="hero-children">{children}</div> */}
  //   </div>
  // );

  renderNew = (): any => {
    return (
      <div className={style.heroContainer}>
        {/* <Parallax offsetYMin={'-40%'} offsetYMax={'40%'}> */}
        <div className={style.heroImage} />
        {/* </Parallax> */}
        <div className={style.heroChildren}>
          <h1>Lu Shien Lee</h1>
        </div>
        {/* <div className="hero-children">{children}</div> */}
      </div>
    );
  };

  renderOld = (): any => {
    return (
      <div className={[style.splashSection, style.pic].join(' ')}>
        <h1>Lu Shien Lee</h1>
      </div>
    );
  };

  render() {
    // return <div>{this.renderOld()}</div>;
    return <div>{this.renderNew()}</div>;
  }
}

{
  /* <ParallaxBanner
// className="your-class"
layers={[
  {
    image: backgroundImage,
    amount: 0.5,
    slowerScrollRate: false,
    children: <h1>test</h1>
  },
  {
    image: '../../../assets/images/profile.jpg',
    amount: 0.2,
    slowerScrollRate: false
  }
]}
style={{
  height: '500px'
}}
>
<h1>Banner Children</h1>
</ParallaxBanner> // <div className={[style.splashSection, style.pic].join(' ')}> */
}
//   <h1>Lu Shien Lee</h1>
// </div>
