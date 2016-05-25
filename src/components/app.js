import React from 'react';
import styles from './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div 
      	onClick={this.myClickHandler}
      	className={styles.app}
      >Hello world! {styles.mySpecialColor}</div>
    );
  }

  myClickHandler() {
  	console.log('Clicked!');
  }
}