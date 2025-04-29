import { Component, OnInit } from '@angular/core';
import { MdpService } from './mdp.service';

@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['./mdp.component.css']
})
export class MdpComponent{
  cin = 0; 
  pass = '';

  constructor(private mdpService: MdpService) {}

  onSubmit() {
    this.mdpService
      .updatePassword(this.cin, this.pass)
      .subscribe(
        (response) => {
          alert('Password updated successfully');
        },
        (error) => {
          alert(error.error.message || 'An error occurred');
        }
      );
  }
}
