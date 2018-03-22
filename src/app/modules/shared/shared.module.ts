import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ReactiveFormsModule } from '@angular/forms';

const SharedModules = [
  CommonModule,
  TableModule,
  InputTextModule,
  CalendarModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [...SharedModules],
  exports: [...SharedModules],
  declarations: []
})
export class SharedModule { }
