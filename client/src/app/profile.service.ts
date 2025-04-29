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

 

  getUserData(): User {
    return this.mockedUser;
  }

}
