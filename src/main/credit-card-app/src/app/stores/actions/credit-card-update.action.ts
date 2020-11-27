import { Action } from '@ngrx/store';
import { CardDetails } from '../../model/card-details.model';

export const CARD_UPDATE = '[CARD] Update';

export class CreditCardUpdate implements Action{
readonly type = CARD_UPDATE;

constructor(public payload: CardDetails){}
}

export type actions = CreditCardUpdate;
