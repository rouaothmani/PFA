import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cin: number = 12456778;
  password!: string;

  constructor(private headerService: HeaderService, private toastrService: ToastrService) {}

  showToast(message: string, type: 'success' | 'danger') {
    if (type === 'success') {
      this.toastrService.success(message);
    } else {
      this.toastrService.error(message);
    }
  }

  submit() {
    this.headerService.login(this.cin, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this._showToast('Login Successful!', true);
      },
      (error) => {
        console.error('Login failed:', error);
        this._showToast('Login Failed!', false);
      }
    );
  }
}


