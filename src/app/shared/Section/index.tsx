import * as React from 'react';
import * as style from './style.css';
import ScrollableAnchor from 'react-scrollable-anchor';

interface SectionProps {
  id: string;
  children?: React.ReactNode;
}

export class Section extends React.Component<SectionProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id={this.props.id}>
        <div className={style.section}>{this.props.children}</div>
      </ScrollableAnchor>
    );
  }
}
