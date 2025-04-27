import { Injectable } from '@angular/core';
import { Teacher } from '../si/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
private teachers: Teacher[] = [
  { id: 1, name: "Korchid Mongi",  image: "../assets/img/avatar.png" },
  { id: 2, name: "Najeh Laila",  image: "../assets/img/avatar.png" },
  { id: 3, name: "Selmi Sawsen",  image: "../assets/img/avatar.png" },
  { id: 4, name: "Jarray Fethi",  image: "../assets/img/avatar.png" },
  { id: 5, name: "Khnissi Mouhamed Ali",  image: "../assets/img/avatar.png" },
  { id: 6, name: "Rkik Ali",  image: "../assets/img/avatar.png" },
  { id: 7, name: "Chouat Ines",  image: "../assets/img/avatar.png" },
  { id: 8, name: "Ben Mahmoud Saleh",  image: "../assets/img/avatar.png" },
  { id: 9, name: "Saidi Rakia",  image: "../assets/img/avatar.png" },
  { id: 10, name: "Ben Othmen Sofiene",  image: "../assets/img/avatar.png" },
  { id: 11, name: "Mansouri Dhekra",  image: "../assets/img/avatar.png" },
  { id: 12, name: "Saadaoui Zakia",  image: "../assets/img/avatar.png" },
  { id: 13, name: "Jarray Mondher",  image: "../assets/img/avatar.png" }
  ];

  getTeachers(): Teacher[] {
    return this.teachers;
  }
}
