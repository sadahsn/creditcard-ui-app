import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'credit-card-app';

constructor(private router: Router){
}
  onButtonClick(){
  this.router.navigate(['payment']);
  }
}
