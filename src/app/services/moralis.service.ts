import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoralisService {

  constructor(private httpClient: HttpClient) { }

  async getNfts(address: string) {
    return new Promise(async (resolve, reject) => {
      //Provider

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      headers = headers.set('X-API-Key', 'OKFvffSwDSprjKobEYKXTLZRhWjP0Rnt59yOK1IAcTwX1tfmjlsqRpvlB4CMADDq');
      let result = null;
      await this.httpClient.get<any[]>(
        `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal`,
        { headers }).subscribe(async (data: any) => {
          console.log('Wallet Data5', data);
          result = data;
          resolve(result);
        });
    });
  }
}
