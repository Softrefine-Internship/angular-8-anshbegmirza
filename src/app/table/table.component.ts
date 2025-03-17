import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../shared/get-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  employees: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  totalPages: number = 0;
  itemsPerPageOptions: number[] = [5, 10, 15, 20];
  pageOptions: number[] = [];

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getData().subscribe((response: any) => {
      this.employees = response;
      this.totalItems = this.employees.length;
      this.calculateTotalPages();
      this.updatePageOptions();
      console.log(this.employees);
    });
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    console.log(this.totalPages);
  }

  updatePageOptions(): void {
    this.pageOptions = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    console.log(this.pageOptions);
  }

  onItemsPerPageChange(): void {
    // this.currentPage = 1; // reset page to first.
    // Calculate total pages
    this.calculateTotalPages();

    // Ensure currentPage is within valid range
    if (this.currentPage < 1) this.currentPage = 1;
    if (this.currentPage > this.totalPages) this.currentPage = 1;
    this.updatePageOptions();
  }

  onPageChange(): void {
    console.log('Current Page:', this.currentPage);
    console.log(this.pageOptions);
    console.log('on page changes' + this.itemsPerPage);
  }
}
