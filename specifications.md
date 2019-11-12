Features:
  flash cards--spanish <=> english
    listen and print answer
  orally anounce flashcards
    listen and print answer
  play back recorded speech on disk
    repeat prior sentence
    repeat is variable time
  record and print speech


**_Programming_**

+ File component;  https://reactjs.org/docs/uncontrolled-components.html

+ File api:  https://developer.mozilla.org/en-US/docs/Web/API/File

- Sound**:  react Howler:  https://github.com/thangngoc89/react-howler/blob/master/examples/react/src/styles/index.css; https://howlerjs.com--uses first webm the html5 audio

  + https://react-hooks-update-c530e.firebaseio.com--use html5 audio only

+ Speech**:  Used speech API that does NOT require a provided limited grammar rather than web services provide by google, microsoft etc below.  https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition; https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API; https://www.npmjs.com/package/react-speech-recognition

    IBM Watson speech to text:  https://github.com/AaronWard/IBM-Watson-Speech-To-Text

    Amazon:  https://docs.aws.amazon.com/transcribe/latest/dg/websocket.html; https://docs.aws.amazon.com/transcribe/latest/dg/how-streaming.html

    Amazon seems best for accuracy and price--use it.

    Tutorial:  uses SpeechRecognition API:  https://medium.com/@amanda.k.hussey/a-basic-tutorial-on-how-to-incorporate-speech-recognition-with-react-6dff9763cea5

    Websockets: appears best for Amazon.  A good example of using websockets in react:  https://dev.to/finallynero/using-websockets-in-react-4fkp; https://www.npmjs.com/package/react-websocket; useWebSocket: https://www.npmjs.com/package/react-use-websocket; tutorial:  https://appdividend.com/2019/04/03/websockets-tutorial-with-example-getting-started-with-websockets/

**Flashcards**

+ Use Google Sheets cards database at https://docs.google.com/spreadsheets/d/1XW7Bqt9rOnUKTsiQ0EK5JvWiYYJcOU1YUsAqGEcGYWs/edit#gid=479483450

+ Use 

      npm install googlapis

    for import of google script api library

+ See samples  at https://github.com/googleapis/google-api-nodejs-client/tree/master/samples

* Modify cards to include multiple definitions by separating definitions by a ':' in either the 'Spanish' or 'English' fields.

* This easy to write example does not seem to google client libraries:  https://medium.com/@inaguirre/google-sheets-api-tutorial-with-javascript-588f581aa1d9

* Another good tutorial which shows 3 way to access google sheets:  https://blog.stephsmith.io/tutorial-google-sheets-api-node-js/

* Another tutorial that does NOT require the google api libraries to read google sheets.  **Maybe the best**:  https://webdesign.tutsplus.com/tutorials/building-a-saas-dashboard-with-google-sheets-in-react--cms-32425

* This react app uses google api library but the url library rather the node:  https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1

* curl request:

      curl --location --request GET "https://sheets.googleapis.com/v4/spreadsheets/1XW7Bqt9rOnUKTsiQ0EK5JvWiYYJcOU1YUsAqGEcGYWs/values/A2%3AB3?key=AIzaSyAaidmiX5kasRAnH8MZBh6TyHakZEnjCcY"

