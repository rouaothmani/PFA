import { Injectable } from '@angular/core';
import { Teacher } from '../si/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
private teachers: Teacher[] = [
  { id: 1, name: "Touahri Intissar",  image: "../assets/img/avatar.png" },
  { id: 2, name: "Jabou Mabrouka",  image: "../assets/img/avatar.png" },
  { id: 3, name: "Dakhli Nabil",  image: "../assets/img/avatar.png" },
  { id: 4, name: "Hajjaj Moufida",  image: "../assets/img/avatar.png" },
  { id: 5, name: "Elhsoumi Aicha",  image: "../assets/img/avatar.png" },
  { id: 6, name: "Sakli Hedi",  image: "../assets/img/avatar.png" },
  { id: 7, name: "Chafai Abdelhamid",  image: "../assets/img/avatar.png" },
  { id: 8, name: "Erouel Mohsen",  image: "../assets/img/avatar.png" },
  { id: 9, name: "Selmi Sawsen",  image: "../assets/img/avatar.png" },
  { id: 10, name: "Najeh Laila",  image: "../assets/img/avatar.png" },
  { id: 11, name: "Nafkha Kamel",  image: "../assets/img/avatar.png" }
  ];

  getTeachers(): Teacher[] {
    return this.teachers;
  }
}
