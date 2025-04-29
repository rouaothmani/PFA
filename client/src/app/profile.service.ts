import { Injectable } from '@angular/core';

interface User {
  name: string;
}

interface NewsItem {
  date: string;
  month: string;
  year: string;
  time: string;
  title: string;
  isNew: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private mockedUser: User = {
    name: 'Roua Othmani',
  };

  private mockedNews: NewsItem[] = [
    { date: '26', month: 'Avril', year: '2025', time: '10:58', title: 'بلاغ لطلبة السنوات النهائية', isNew: true },
    { date: '26', month: 'Avril', year: '2025', time: '03:46', title: 'LISTE DES DS ET DSTP SEMESTRE 2 A.U:2024-2025', isNew: true },
    { date: '23', month: 'Avril', year: '2025', time: '11:02', title: 'Page De Garde PFE MPILC A.U 2024-2025', isNew: true },
  ];

  getUserData(): User {
    return this.mockedUser;
  }

  getNews(): NewsItem[] {
    return this.mockedNews;
  }
}
