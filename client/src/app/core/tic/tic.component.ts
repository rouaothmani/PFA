import { Component, OnInit } from '@angular/core';
import { TeacherService } from './teacher.service';
import { Teacher } from '../si/teacher.model';

@Component({
  selector: 'app-tic',
  templateUrl: './tic.component.html',
  styleUrls: ['./tic.component.css']
})
export class TicComponent implements OnInit {
  teachers: Teacher[] = [];
  filteredTeachers: Teacher[] = [];
  
  currentPage = 1;
  itemsPerPage = 9;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teachers = this.teacherService.getTeachers();
    this.filteredTeachers = [...this.teachers];
  }

  onItemsPerPageChange(items: number): void {
    this.itemsPerPage = items;
    this.currentPage = 1;
  }

  changePage(page: number | string): void {
    if (typeof page === 'number') {
      this.currentPage = page;
    } else {
      switch (page) {
        case 'first':
          this.currentPage = 1;
          break;
        case 'prev':
          if (this.currentPage > 1) this.currentPage--;
          break;
        case 'next':
          if (this.currentPage < this.totalPages) this.currentPage++;
          break;
        case 'last':
          this.currentPage = this.totalPages;
          break;
      }
    }
  }

  get paginatedTeachers(): Teacher[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredTeachers.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTeachers.length / this.itemsPerPage);
  }

  get paginationInfo(): string {
    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    let end = this.currentPage * this.itemsPerPage;
    if (end > this.filteredTeachers.length) {
      end = this.filteredTeachers.length;
    }
    return `Affichage de ${start} jusqu'au ${end} depuis ${this.filteredTeachers.length} lignes`;
  }
}

