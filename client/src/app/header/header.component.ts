import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cin: number = 24681357;
  password!: 'userPass1234';

  constructor(private headerService: HeaderService, private toastrService: ToastrService, private router: Router) {}

  submit() {
    this.headerService.login(this.cin, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.toastrService.success('Login Successful!');        
        this.router.navigate(['/profile']);

      },
      (error) => {
        console.error('Login failed:', error);
        this.toastrService.error('Login Failed!');
      }
    );
  }
}


