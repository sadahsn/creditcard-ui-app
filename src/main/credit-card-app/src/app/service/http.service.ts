import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

private gatewayUrl = '';
  constructor(private httpClient: HttpClient) { }

  public setGatewayUrl(url: string){
  this.gatewayUrl = url;
  }

  public getGatewayUrl(){
  return this.gatewayUrl;
  }

  public getEndpointUrl(url: string){
  return this.gatewayUrl + url;
  }

  public getHeaders(){
  return new HttpHeaders().set('Content-Type', 'application/json');
  }

  public extractData(response: any){
  const result = response;
  return result;
  }

  public handleError(response: any){
  return throwError(response);
  }

  public httpGet(url): Observable<any>{
  const options = {
  headers : this.getHeaders()
  };

  return this.httpClient.get(this.getEndpointUrl(url), options).pipe(map(this.extractData), catchError(this.handleError));
  }

  public httpPost(url, data): Observable<any>{
    const options = {
    headers : this.getHeaders()
    };

    return this.httpClient.post(this.getEndpointUrl(url), data, options).pipe(map(this.extractData), catchError(this.handleError));
    }
}
