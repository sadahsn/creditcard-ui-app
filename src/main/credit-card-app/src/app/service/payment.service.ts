import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CardDetails} from '../model/card-details.model';
import { Observable, throwError, ReplaySubject } from 'rxjs';
import {Store} from '@ngrx/store';
import * as CardActions from '../stores/actions/credit-card-update.action';
import { Http, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

public activeResponse:ReplaySubject<any> = new ReplaySubject(1);

  constructor(private route: ActivatedRoute, private httpService: HttpService,
  private _cardStore: Store<CardDetails> ,private http: Http) { }


  paymentProcess(data: CardDetails ): Observable<any>{

  // return this.httpService.httpPost(url, data);
   this._cardStore.dispatch(new CardActions.CreditCardUpdate(data));

   //this.http.get('/paymentProcess').subscribe(res => this.activeResponse.next(res));
   this.activeResponse.next(data);
       return this.activeResponse;
  }
}
