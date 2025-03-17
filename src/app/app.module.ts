import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { SalaryPipe } from './shared/salary.pipe';
import { PaginationPipe } from './shared/pagination.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, TableComponent, SalaryPipe, PaginationPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
