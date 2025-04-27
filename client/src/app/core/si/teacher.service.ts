import { Injectable } from '@angular/core';
import { Teacher } from './teacher.model';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teachers: Teacher[] = [
  { id: 1, name: "Sghayer Mabrouk",  image: "../assets/img/avatar.png" },
  { id: 2, name: "Mguis Fathi",  image: "../assets/img/avatar.png" },
  { id: 3, name: "Lazreg Ayedi",  image: "../assets/img/avatar.png" },
  { id: 4, name: "Triki Hajer",  image: "../assets/img/avatar.png" },
  { id: 5, name: "Laouer Ibtissem",  image: "../assets/img/avatar.png" },
  { id: 6, name: "Idoudi Jamel",  image: "../assets/img/avatar.png" },
  { id: 7, name: "Boukhalda Ayda",  image: "../assets/img/avatar.png" },
  { id: 8, name: "Jebahi Afef",  image: "../assets/img/avatar.png" },
  { id: 9, name: "Hajjem Faouzi",  image: "../assets/img/avatar.png" },
  { id: 10, name: "Jawad Raouf",  image: "../assets/img/avatar.png" },
  { id: 11, name: "Abdessamad Nessrine",  image: "../assets/img/avatar.png" },
  { id: 12, name: "Jarray Chadya",  image: "../assets/img/avatar.png" },
  { id: 13, name: "S.Hamouda",  image: "../assets/img/avatar.png" },
  { id: 14, name: "Orf Hajer",  image: "../assets/img/avatar.png" },
  { id: 15, name: "Chouat Hajer",  image: "../assets/img/avatar.png" },
  { id: 16, name: "Sagri Sonia",  image: "../assets/img/avatar.png" },
  { id: 17, name: "Cherif Manel",  image: "../assets/img/avatar.png" },
  { id: 18, name: "Najeh Layla",  image: "../assets/img/avatar.png" },
  { id: 19, name: "Chouikhi Ali",  image: "../assets/img/avatar.png" },
  { id: 20, name: "Chouiref Imen",  image: "../assets/img/avatar.png" },
  { id: 21, name: "Ben Othmen Soufiene",  image: "../assets/img/avatar.png" },
  { id: 22, name: "Saadaoui Zakia",  image: "../assets/img/avatar.png" },
  { id: 23, name: "Mechrya Hana",  image: "../assets/img/avatar.png" },
  { id: 24, name: "Laabidi Taher",  image: "../assets/img/avatar.png" },
  { id: 25, name: "Be Amor Lamia",  image: "../assets/img/avatar.png" },
  { id: 26, name: "Neji Rim",  image: "../assets/img/avatar.png" },
  { id: 27, name: "Selmi Sawsen",  image: "../assets/img/avatar.png" },
  { id: 28, name: "Jarray Fathi",  image: "../assets/img/avatar.png" },
  { id: 29, name: "Korchid Mongi",  image: "../assets/img/avatar.png" },
  { id: 30, name: "Khnissi Mouhamed Ali",  image: "../assets/img/avatar.png" },
  { id: 31, name: "Chouat Ines",  image: "../assets/img/avatar.png" },
  { id: 32, name: "Jabou Mabrouka",  image: "../assets/img/avatar.png" },
  { id: 33, name: "Chouikhi Naima",  image: "../assets/img/avatar.png" },
  { id: 34, name: "Saaidi Rakia",  image: "../assets/img/avatar.png" },
  { id: 35, name: "Selmi Dounia",  image: "../assets/img/avatar.png" },
  { id: 36, name: "Jarray Mondher",  image: "../assets/img/avatar.png" }
  ];

  getTeachers(): Teacher[] {
    return this.teachers;
  }


}