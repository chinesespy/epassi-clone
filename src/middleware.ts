import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
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

export function middleware(request: NextRequest) {
  if(!request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.startsWith("/api")){
    if (
      request.nextUrl.pathname.includes("/settings") ||
      request.nextUrl.pathname.includes("/payment-done") ||
      request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname.includes("/reciept")
  ){
        const cookies = request.cookies;
        const idCookie = cookies.get('access')?.value;
       
        if (!idCookie) {
          return NextResponse.rewrite(new URL('/login', request.url))
        } else {
          try {
            if(Crypter.decrypt(idCookie) !== 'a!X],FQ8}N!g:5m@@aJ81tw^DTaafjzE?WV0'){
              cookies.delete('access');
              return NextResponse.rewrite(new URL('/login', request.url))
            }
          } catch (Exception){
              return NextResponse.rewrite(new URL('/login', request.url))
          }
        }
      }
  }

    if (request.nextUrl.pathname.startsWith('/payment-done')) {
      if(request.nextUrl.search == '' || !request.nextUrl.search.search("id")){
        console.log(request.url)
        return NextResponse.rewrite(new URL('/', request.url.replace('/payment-done', '')))
      }
    }
  }