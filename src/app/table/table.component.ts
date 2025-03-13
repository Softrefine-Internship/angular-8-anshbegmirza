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
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
    console.log(this.employees, this.totalItems, this.totalPages);
  }
}
