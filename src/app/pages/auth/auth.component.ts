import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {}

  login(user: any) {
    // console.log(user);
    this.data
      .post('QuanLyNguoiDung/DangNhap', user)
      .subscribe((result: any) => {
        // console.log(result);

        if (result.maLoaiNguoiDung === 'GV') {
          // Lưu trạng thái xuống localStorage
          localStorage.setItem('UserAdmin', JSON.stringify(result));

          // Chuyển hướng qua trang admin/dashboard
          this.router.navigate(['/admin/dashboard']);
        } else {
          alert('Tài khoản này không có quyền truy cập');
        }
      });
  }
}
