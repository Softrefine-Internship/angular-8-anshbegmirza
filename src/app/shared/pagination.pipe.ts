import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(value: any[], currentPage: number, itemsPerPage: number): any[] {
    if (!value || value.length === 0) return [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return value.slice(startIndex, endIndex);
  }
}
