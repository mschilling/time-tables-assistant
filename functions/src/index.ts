import * as functions from 'firebase-functions';

import {
    dialogflow,
    Parameters,
    Contexts,
    Context,
    Suggestions,
    BasicCard,
    Button,
    SimpleResponse,
} from 'actions-on-google';

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

const app = dialogflow()

app.intent('N Times Tables', conv => {

    console.log('parameters', conv.parameters);

    const maxTimes = 10;

    let N = 7;
    try {
        N = parseInt(conv.parameters.n + '');
    } catch(error){

    }

    let tableText = '';
    let tableSpeech = `<speak>Hier komt de tafel van ${N}.</speak>`;

    for (let i = 1; i <= maxTimes; i++) {
        tableText += `${i} x ${N} = ${(i * N)}\n`;
        tableSpeech += `<speak>${i} maal ${N} = ${(i * N)}</speak><break time="0.3s" strength="strong"/>`;
    }

    // let response = 
    conv.close(new SimpleResponse({
        speech: `<speak>${tableSpeech}</speak>`,
        text: tableText
    }))

})

exports.assistant = functions.https.onRequest(app)
