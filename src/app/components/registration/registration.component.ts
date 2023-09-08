import { Component } from "@angular/core";
import { User } from "src/app/models/user.model";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  userDetail = new User();

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {

  }
  registerAccount() {
    this.authService.register(this.userDetail)
      .then(response => {
        this.toastr.success('Registration successful.');
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        this.toastr.error('Internal server error.');
      })
  }
}