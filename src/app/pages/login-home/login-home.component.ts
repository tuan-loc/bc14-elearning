import { DataService } from './../../_core/services/data.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {
  notify: string = "";
  history: string[] = [];

  constructor(private el: ElementRef, private dataService: DataService, private router: Router, private location: Location) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    })
  }
  
  ngOnInit(): void {
  }

  handleLoginClick() {
    this.notify = "";
    
    this.el.nativeElement.querySelector('#btn-active').style.left = "0";
    this.el.nativeElement.querySelector('#register').style.left = "450px";
    this.el.nativeElement.querySelector('#login').style.left = "50px";
    this.el.nativeElement.querySelector('.login-active').style.color = "#fff";
    this.el.nativeElement.querySelector('.register-active').style.color = "#000";
  }

  handleRegisterClick() {
    this.notify = "";

    this.el.nativeElement.querySelector('#btn-active').style.left = "130px";
    this.el.nativeElement.querySelector('#register').style.left = "50px";
    this.el.nativeElement.querySelector('#login').style.left = "-400px";
    this.el.nativeElement.querySelector('.login-active').style.color = "#000";
    this.el.nativeElement.querySelector('.register-active').style.color = "#fff";
  }

  // Đăng Nhập
  loginInfo(user: any) {
    this.dataService.post('QuanLyNguoiDung/DangNhap', user).subscribe((result) => {
        // Lưu trạng thái xuống localStorage
        // UserAdmin hoặc User
        if (result.maLoaiNguoiDung == "GV") {
          localStorage.setItem('UserAdmin', JSON.stringify(result));
        }
        else {
          localStorage.setItem('User', JSON.stringify(result));
        }

        // Xử lý chuyến hướng trang
        if (this.history.length > 0) {
          // chuyển hướng về trang trước đó
          this.location.back();
        }
        else {
          // Chuyển hướng đến trang home
          this.router.navigate(['/']);
        }
    }, (error) => this.notify = error.error);
  }

  // Đăng kí
  registerUser(user: any) {
    user.maNhom = "GP01";
    // console.log(user);

    this.dataService.post('QuanLyNguoiDung/DangKy', user)
    .subscribe((result) => { this.notify = "Đăng ký thành công"}, (error) => this.notify = error.error);
  }

}
