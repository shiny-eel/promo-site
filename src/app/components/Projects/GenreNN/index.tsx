import * as React from 'react';
import * as style from '../project.css';
import { Project } from 'app/shared/Project';

const logo = require('../../../../assets/images/genre-chart.jpg');

export class GenreNN extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Project title="Genre Predictor">
        <div className={style.imageHolder}>
          <img src={logo} style={{ width: '90%' }} alt="Predicting the genre of an unseen song" />
        </div>
        <div className={style.text}>
          <p>
            Training an Artificial Neural Network to classify songs into genres. A research project
            for a post-graduate computer science course.
          </p>
          <h3>See the code:</h3>
          <a href="https://github.com/shiny-eel/genre-tdnn" target="_blank">
            <h3>Github Repository</h3>
          </a>
        </div>
      </Project>
    );
  }
}
