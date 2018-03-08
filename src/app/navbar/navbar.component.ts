import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { LoginInfo, RegisterInfo } from '../interfaces';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public message;
  public email;
  public password;
  public session_token;
  public logined = false;
  public user_name;
  public activeRegister;
  public data;
  public showmsgerror=false;
  public showmsgsuccess=false;
  @ViewChild('closeButton') closeButton: ElementRef;
  constructor(private _dataService: DataService,private toastr: ToastrService) { }
  ngOnInit() {
    if(localStorage.getItem('session_token')){
   this.session_token=  localStorage.getItem('session_token');
     this.user_name= localStorage.getItem('user_name');
      this.logined = true;}
   }

  login(info: LoginInfo) {
    this._dataService.login(info).subscribe(
      data => this.afterLogin(
        this.data = data
      ),
      err => console.error(err)
    );
  }
showSuccess() {
    this.toastr.success('Successfully logined 😃', 'Success!',{
        positionClass: 'toast-bottom-right'
    });
  }

  register(info: RegisterInfo) {
    this._dataService.register(info).subscribe(
      data => this.afterLogin(
        this.data = data
      ),
      err => console.error(err)
    );
  }

  afterLogin(data) {
    if (data['errorCode'] == 0) {
      this.showSuccess();
      this.message = data['message'];
      this.session_token = data['result']['session_token'];
      this.user_name = data['result']['user_name'];
      this.showmsgsuccess=true;
      localStorage.setItem('session_token', this.session_token);
      localStorage.setItem('user_name', this.user_name);
      this.logined = true;
      this.closeButton.nativeElement.click();
    }
    else {
      this.message = data['message'];
       this.showmsgerror=true;
    }
   
  }

  activeLogin() {
    this.activeRegister = false;
  }
  activeRegisterModal() {
    this.activeRegister = true;
  }

}