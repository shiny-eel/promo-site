import * as React from 'react';
import * as style from '../project.css';

const logo = require('../../../../assets/images/genre-chart.png');

export class GenreNN extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={style.project}>
        <h1>Genre Picker</h1>
        <div className={style.projectContent}>
          <div className={style.imageHolder}>
            <img src={logo} style={{ width: '90%' }} alt="Predicting the genre of an unseen song" />
          </div>
          <div className={style.text}>
            <p>
              Training an Artificial Neural Network to classify songs into genres. A research
              project for a post-graduate computer science course.
            </p>
            <h2>See the code:</h2>
            <a href="https://github.com/shiny-eel/genre-tdnn" target="_blank">
              <h2>Github Repository</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
