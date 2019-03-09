import * as React from 'react';
import * as style from '../project.css';
import { Project } from 'app/shared/Project';

const logo = require('../../../../assets/images/cardiac-nn-header.jpg');

const baseURL = 'https://s3-ap-southeast-2.amazonaws.com/lushien-resources/';
const slides = 'lsl-p4-slides.pdf';
const report = 'lsl-p4-report.pdf';
const poster = 'lsl-p4-poster.pdf';

export class PartIV extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Project title="Predicting the Pulse">
        <div className={style.imageHolder}>
          <img src={logo} style={{ width: '80%' }} alt="MX Slate Screenshot" />
        </div>
        <div className={style.text}>
          <p>
            This was my Honours project for Engineering. My partner and I explored the ability of
            artificial neural networks to reconstruct the electrical activity of the heart surface
            when given ECGs as inputs.
          </p>
          <h3>Learn more:</h3>
          <a href={baseURL + poster} target="_blank">
            <h3>the poster</h3>
          </a>
          <a href={baseURL + slides} target="_blank">
            <h3>the slides</h3>
          </a>
          <a href={baseURL + report} target="_blank">
            <h3>the report</h3>
          </a>
        </div>
      </Project>
    );
  }
}
