import { Component,  } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  user: any;
  news: any[] = [];

  constructor(profileService: ProfileService) {
    // this.user = this.profileService.getUserData();
    // this.news = this.profileService.getNews();
  }
}
