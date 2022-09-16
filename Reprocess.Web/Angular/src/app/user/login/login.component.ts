import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserData } from 'src/app/Model/user/user-data';
import { UserLoginData } from 'src/app/Model/user/user-login-data';
import { UserLoginResponseData } from 'src/app/Model/user/user-login-response-data';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 rfLogin : FormGroup;
 result : UserLoginResponseData ;
  constructor(private userService: UserService, private toasrt : ToastrService) { }

  ngOnInit() {
    this.rfLogin = new FormGroup({
      loginUserName: new FormControl("admin"
        , Validators.required),
    loginPassword: new FormControl("1234"
    , Validators.required)
    });

  }
  onSubmitBtnLogin() {
    try {
      var formValue = this.rfLogin.value;
      let userLoginData = {} as UserLoginData;
      userLoginData.UserName = formValue.loginUserName;
      userLoginData.PassWord = formValue.loginPassword;
      this.userService.userLogin(userLoginData).subscribe(res => {
      this.result = res;
      if(this.result.IsSucces)
      {
        localStorage.setItem("jwt",this.result.Token)
        window.location.href =this.result.UrlReturn;
      }
      else
      {
        if(this.result.ErrorMSG)
        {
          var errMessage = document.getElementById('errMessage');
        }
      }
    })
    }
    catch {
      // alert Catch
    }
  }

  get userName() {
    return this.rfLogin.get('loginUserName');
  }
  get password() {
    return this.rfLogin.get('loginPassword');
  }
}
