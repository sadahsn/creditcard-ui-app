import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../../service/payment.service';
import { ToasterService } from '../../service/toaster.service';
import {CardDetails} from '../../model/card-details.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

cardForm: FormGroup;

  constructor(private router: Router,
  private route: ActivatedRoute,
  private fb: FormBuilder,
  private paymentService: PaymentService,
  private toasterService: ToasterService) { }

  ngOnInit(): void {
  this.cardForm = this.fb.group({
        cardNo: ['', Validators.required],
        name: ['', Validators.required],
        expDate: ['', Validators.required],
        cvvNo: ['', Validators.required],
        amount: ['', Validators.required]
      });
  }

onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

  onlyDecimalNumberKey(event) {
      let charCode = (event.which) ? event.which : event.keyCode;
      if (charCode != 46 && charCode > 31
          && (charCode < 48 || charCode > 57))
          return false;
      return true;
  }

  onPayClick(params){
  const data: CardDetails = this.cardForm.value;
  if(this.isValidData(data)){
  this.paymentService.paymentProcess(data ).subscribe(res => {
     if(res){
      this.toasterService.showMessage('Payment of amount '+ res.amount +' successfully paid');
     }
    });
  } else {
  this.toasterService.showError('Invalid data entered!');
  }

  }

  isValidData(data: CardDetails){
     let valid = true;

     if(this.isEmpty(data.cardNo) || this.isEmpty(data.name)
     || this.isEmpty(data.expDate) || this.isEmpty(data.cvvNo)
     || this.isEmpty(data.amount) || data.amount === 0 || this.isInvalidDate(data.expDate)){
      valid = false;
     }

     return valid;
  }

  isEmpty(param){
  return param === null || param === '';
  }

  isInvalidDate(expDate: Date){
   return expDate <= new Date();
  }
}
