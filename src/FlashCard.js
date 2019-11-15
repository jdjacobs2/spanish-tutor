import React, { Component } from 'react';
import styles from './FlashCard.module.css';

export class FlashCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      response: []
    }
  }

  // async myFetch(url){
  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json"
  //       Authorization: 'Bearer 1KTArYwDWrn52fnc7B12KvjRb6nmcEaU6gXYehWfsZSo'
  //     }
  //   });
  //   let myJson = await response.json();
  //   myJson = JSON.stringify(myJson);
  //   this.setState({response: myJson});
  // }

  componentDidMount() {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1XW7Bqt9rOnUKTsiQ0EK5JvWiYYJcOU1YUsAqGEcGYWs/values/A%3AB?key=AIzaSyAaidmiX5kasRAnH8MZBh6TyHakZEnjCcY"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ response: data.values })
      });
  }

  render() {
    const data = this.state.response.map((item) =>
      (<p className={styles.line}>
        <span className={styles.item}>{item[0]}</span>
        <span className={styles.item}>{item[1]}</span>
      </p>));
    return (
      <div>
        <h3>Length:  {data.length}</h3>  
        <div style={{marginTop:'35px'}}>
        {data}
      </div>
      </div>

    )
  }
}

export default FlashCard
