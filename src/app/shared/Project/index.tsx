import * as React from 'react';
import * as style from './style.css';
import { ParallaxProvider } from 'react-scroll-parallax';

interface ProjectProps {
  title: string;
  children?: React.ReactNode;
}

export class Project extends React.Component<ProjectProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ParallaxProvider>
        <div className={style.project}>
          <h1>{this.props.title}</h1>
          <div className={style.projectContent}>{this.props.children}</div>
        </div>
      </ParallaxProvider>
    );
  }
}
