export class CardDetails {
cardNo: string;
name: string;
expDate: Date;
cvvNo: string;
amount: number;
}

export const initialCardDetails: CardDetails =  {
cardNo : '',
name : '',
expDate: null,
cvvNo : null,
amount: null
}
