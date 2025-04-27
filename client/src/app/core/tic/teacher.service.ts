import { Injectable } from '@angular/core';
import { Teacher } from '../si/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
 private teachers: Teacher[] = [
  { id: 1, name: "Neji Fethi",  image: "../assets/img/avatar.png" },
  { id: 2, name: "Mechrya Hana",  image: "../assets/img/avatar.png" },
  { id: 3, name: "Boukhalda Ayda",  image: "../assets/img/avatar.png" },
  { id: 4, name: "Jabou Mabrouka",  image: "../assets/img/avatar.png" },
  { id: 5, name: "Sellami Dounia",  image: "../assets/img/avatar.png" },
  { id: 6, name: "Mechri Walid",  image: "../assets/img/avatar.png" },
  { id: 7, name: "Amorri Oumaima",  image: "../assets/img/avatar.png" },
  { id: 8, name: "Jarray Chedya",  image: "../assets/img/avatar.png" },
  { id: 9, name: "Thabet Faouizi",  image: "../assets/img/avatar.png" },
  { id: 10, name: "Manita Marwa",  image: "../assets/img/avatar.png" },
  { id: 11, name: "Zerai Iyed",  image: "../assets/img/avatar.png" },
  { id: 12, name: "Touahri Intissar",  image: "../assets/img/avatar.png" },
  { id: 13, name: "Bouabidi Mabrouka",  image: "../assets/img/avatar.png" },
  { id: 14, name: "Touati Hamid",  image: "../assets/img/avatar.png" },
  { id: 15, name: "Idoudi Jamel",  image: "../assets/img/avatar.png" },
  { id: 16, name: "Nafkha Kamel",  image: "../assets/img/avatar.png" },
  { id: 17, name: "Nacer Olfa",  image: "../assets/img/avatar.png" },
  { id: 18, name: "Hajjaj Moufida",  image: "../assets/img/avatar.png" },
  { id: 19, name: "Bchiri Yemna",  image: "../assets/img/avatar.png" },
  { id: 20, name: "Jarray Chadya",  image: "../assets/img/avatar.png" },
  { id: 21, name: "Manita Marwa",  image: "../assets/img/avatar.png" },
  { id: 22, name: "Saidi Ahlem",  image: "../assets/img/avatar.png" },
  { id: 23, name: "Dakhli Nabil",  image: "../assets/img/avatar.png" },
  { id: 24, name: "Bel Hadj Taher Aymen",  image: "../assets/img/avatar.png" },
  { id: 25, name: "Chafi Abdelhamid",  image: "../assets/img/avatar.png" },
  { id: 26, name: "Chouiref Imen",  image: "../assets/img/avatar.png" }
 ];
  getTeachers(): Teacher[] {
     return this.teachers;
   }
 
}
