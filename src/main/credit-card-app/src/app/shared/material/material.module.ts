import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatGridListModule,
      MatDatepickerModule,
      MatNativeDateModule
} from '@angular/material';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatSidenavModule,
            MatMenuModule,
            MatIconModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatGridListModule,
            MatDatepickerModule,
            MatNativeDateModule
  ],
  exports: [
  MatButtonModule,
              MatCheckboxModule,
              MatToolbarModule,
              MatSidenavModule,
              MatMenuModule,
              MatIconModule,
              MatCardModule,
              MatInputModule,
              MatFormFieldModule,
              MatGridListModule,
              MatDatepickerModule,
              MatNativeDateModule
      ]
})
export class MaterialModule { }
