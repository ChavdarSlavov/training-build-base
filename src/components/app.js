import React from 'react';
import styles from './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div 
      	onClick={this.myClickHandler}
      	className={styles.app}
      >Hello world!</div>
    );
  }

  myClickHandler() {
  	console.log('Clicked!');
  }
}