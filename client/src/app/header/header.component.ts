import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  cin: number =12456778;
  password!: string;

  constructor(private headerService: HeaderService,private messageService: MessageService) { }

  submit() {
    this.headerService.login(this.cin, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login Successful!'
        });
      },
      (error) => {
        console.error('Login failed:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Login Failed!'
        });
      }
    );
  }
}

