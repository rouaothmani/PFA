import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  cin: number =12456778;
  password!: string;

  constructor(private headerService: HeaderService) {}

  private _showToast(message: string, isSuccess: boolean) {
    const toastLiveExample = document.getElementById('myToast') as HTMLElement;
    const toastBody = document.querySelector('#myToast .toast-body') as HTMLElement;
    if (toastLiveExample && toastBody) {
      toastBody.textContent = message;
      toastLiveExample.classList.remove(isSuccess ? 'bg-danger' : 'bg-success');
      toastLiveExample.classList.add(isSuccess ? 'bg-success' : 'bg-danger');
      const toast = new (window as any).bootstrap.Toast(toastLiveExample);
      toast.show();
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


