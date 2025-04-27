import { Injectable } from '@angular/core';
import { Teacher } from '../si/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
private teachers: Teacher[] = [
  { id: 1, name: "Najeh Layla",  image: "../assets/img/avatar.png" },
  { id: 2, name: "Selmi Sawsen",  image: "../assets/img/avatar.png" },
  { id: 3, name: "Jarray Abdenaceur",  image: "../assets/img/avatar.png" },
  { id: 4, name: "Nacer Olfa",  image: "../assets/img/avatar.png" },
  { id: 5, name: "Gares Mouhamed",  image: "../assets/img/avatar.png" },
  { id: 6, name: "Elhasoumi Aicha",  image: "../assets/img/avatar.png" },
  { id: 7, name: "Bchiri Yomna",  image: "../assets/img/avatar.png" },
  { id: 8, name: "Jabou Mabrouka",  image: "../assets/img/avatar.png" },
  { id: 9, name: "Erouel Mohsen",  image: "../assets/img/avatar.png" },
  { id: 10, name: "Zerai Iyed",  image: "../assets/img/avatar.png" },
  { id: 11, name: "Mansouri Dhekra",  image: "../assets/img/avatar.png" },
  { id: 12, name: "Ghoul Bachir",  image: "../assets/img/avatar.png" },
  { id: 13, name: "Mechri Walid",  image: "../assets/img/avatar.png" },
  { id: 14, name: "Jarray Kamel",  image: "../assets/img/avatar.png" }
  ];

  getTeachers(): Teacher[] {
    return this.teachers;
  }
}
