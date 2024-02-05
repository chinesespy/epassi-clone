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
function generateUID() {
  const timestamp = Date.now().toString(36);
  const randomChars = Math.random().toString(36).substr(2, 25); // Adjust length as needed
  return timestamp + randomChars;
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
        if(parsed.pwd == "EP4SSI_2024_FREE_N0SC4MW0RKING!!"){
          res.status(200).json({ cookie:  Crypter.encrypt('895l=t64aX4P8PN4m"40r!B;7RY"?!k:')});
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