'use server';

import {
    NextApiRequest,
    NextApiResponse
  } from "next";

import NextCors from 'nextjs-cors';
import * as CryptoJS from 'crypto-js';

export class Crypter{
  public static decrypt(value, IV = '443bdcfc59e58a11855eecce0a59b7dd'){
    const key = CryptoJS.enc.Utf8.parse("eC@AVAZaYAsPTD9fj+&*dxhksY9xPEdm");
    const decryptedData = CryptoJS.AES.decrypt(value, key, {
      keySize: 16,
      iv: CryptoJS.enc.Utf8.parse(IV),
      mode: CryptoJS.mode.CBC
    });
    return decryptedData.toString(CryptoJS.enc.Utf8);
  }
  public static encrypt(value, IV = '443bdcfc59e58a11855eecce0a59b7dd') {
    const key = CryptoJS.enc.Utf8.parse("eC@AVAZaYAsPTD9fj+&*dxhksY9xPEdm");
    const encryptedData = CryptoJS.AES.encrypt(value, key, {
      keySize: 16,
      iv: CryptoJS.enc.Utf8.parse(IV),
      mode: CryptoJS.mode.CBC
    });
      return encryptedData.toString();
  }
}

const discordWebhookURL = 'https://discord.com/api/webhooks/1208940581053796413/LRMN73oAsPyslyMZoOzQpcXTh1BYGswwC53cAwrSsrYHCSoiDRd7_8dNkdyiq6Hcx7yn';

async function sendToDiscord(data) {
  try {
    const response = await fetch(discordWebhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Message sent successfully to Discord');
    } else {
      console.error('Failed to send message to Discord:', response.statusText);
    }
  } catch (error) {
    console.error('Error sending message to Discord:', error);
  }
}
function generateRandomColor() {
  return Math.floor(Math.random() * 16777215);
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
      methods: ['GET'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTV) choke on 204
    });

    try {
      const parsed = JSON.parse(req.body);

      if(!parsed.hasOwnProperty('pwd')){
        res.status(200).json({ message:"invalid data" });
        return;
      } else {
        if(parsed.pwd == "syncope-panicky-succubi-pagan"){
          const userLanguage = req.headers['accept-language'];
          const userAgent = req.headers['user-agent'];
          sendToDiscord({
            content: 'Uusi kirjautuminen',
            embeds: [
              {
                title: 'Uusi kirjautuminen',
                description: `Locale: ${userLanguage}\nUser Agent: ${userAgent}`,
                timestamp: (new Date).toISOString(),
                color: generateRandomColor(), 
              },
            ],
          });

          res.status(200).json({ cookie:  Crypter.encrypt('a!X],FQ8}N!g:5m@@aJ81tw^DTaafjzE?WV0')});
          return;
        } else {
          res.status(200).json({ message:"invalid data" });
        }
      }
    } catch(Exception){
      res.status(500).json({ message:"failed to parse" });
      return;
    }

}