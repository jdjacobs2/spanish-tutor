import React, { Component } from 'react'

export class AddCard extends Component {
  

  componentDidMount() {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1XW7Bqt9rOnUKTsiQ0EK5JvWiYYJcOU1YUsAqGEcGYWs/values/A3:C?key=AIzaSyAaidmiX5kasRAnH8MZBh6TyHakZEnjCcY",
    )
      .then(response => {
        const resp = response.json();
        // console.log(resp);
        return resp;
      })
      .then(data => {
        // console.log(data);
        this.setState({ response: data.values }, findSpanishWord);
      });

    const addNewWord = (word) => {
      const exists = findSpanishWord(word);
      if (!exists) {

      } else {

      }
    }

    const findSpanishWord = (word) => {
      const arr = this.state.response;
      const span = arr.map((row) => row[1]);
      const resp = span.includes(word);
      return resp;
    };
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default AddCard
