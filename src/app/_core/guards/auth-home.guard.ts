import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthHomeGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate() {
    if (localStorage.getItem('User') || localStorage.getItem('UserAdmin')) {
      // Đã login thành công
      return true;
    }

    // Chưa login - chuyển hướng về trang /login
    this.router.navigate(['/login']);
    return false;
  }
  
}
