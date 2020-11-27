import { Injectable } from '@angular/core';
import { ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
 config = {
 timeOut: 10000,
 closeButton: true,
 enableHtml: false,
};
 title = '';
  constructor(private toastr: ToastrService) { }

  showMessage(message: string){
  this.toastr.success(message, this.title);
  }

  showError(message: string){
  this.toastr.error(message, this.title);
  }
}
