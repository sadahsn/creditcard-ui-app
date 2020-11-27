import * as CardActions from '../actions/credit-card-update.action';
import {initialCardDetails, CardDetails} from '../../model/card-details.model';

export function cardReducer(state: CardDetails = initialCardDetails, action: CardActions.actions){
switch(action.type){
case CardActions.CARD_UPDATE:
return action.payload;
default:
return state;
}
}
