import React from 'react';
import styles from './app.scss';

export default class App extends React.Component{

  handleClick(){
    console.log('Clicked');
  }

  render(){
    return (
      <div
        onClick={this.handleClick}
        className={styles.app}
      >Hello world! {styles.mySpecialColor}</div>
    );
  }
}
