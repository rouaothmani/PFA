import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

interface user {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cin: number = 12456778
  password = "password"
  isLoggedIn: boolean = false
  userName: string = ''
  constructor(private headerService: HeaderService, private toastrService: ToastrService, private router: Router) {

  }
  ngOnInit(): void {

  }

  logout() {
    this.isLoggedIn = false
    this.userName = ''
    this.toastrService.success('Logout successful!')
    this.router.navigate(['/'])
  }


  submit() {
    this.headerService.login(this.cin, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response)
        this.toastrService.success('Login Successful!')
        this.router.navigate(['/profile'])
        this.isLoggedIn = true
        this.headerService.getUserByCin(this.cin).subscribe((response: user) => {
          this.userName = response.name
        })

      },
      (error) => {
        console.error('Login failed:', error)
        this.toastrService.error('Login Failed!')
      }
    );
  }
  closeDropdown() {
    // Get the dropdown menu and remove 'show' class to close it
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.remove('show');
    }
  }
  
}
