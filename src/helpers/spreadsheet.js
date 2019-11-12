import config from '../config';

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:B10"
      })
      .then(
        response => {
          console.log(response);
          // const data = response.result.values;
          // const cars = data.map(car => ({
          //   year: car[0],
          //   make: car[1],
          //   model: car[2]
          // })) || [];
          // callback({
          //   cars
          // });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}